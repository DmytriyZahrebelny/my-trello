import type { Board, Column, Card } from '@shared/types';

import { db } from '../../common/database';

export class BoardService {
  private pool = db;

  async findById(boardId: string): Promise<Board> {
    const { rows: board } = await this.pool.query<Board>(
      `SELECT id, name, workspace_id AS "workspaceId" FROM boards WHERE id='${boardId}'`,
    );
    if (board.length) {
      const { rows: columns } = await this.pool.query<Column>(
        `SELECT id, name, board_id AS "boardId" FROM columns WHERE board_id='${board[0].id}'`,
      );

      const cards = (
        await Promise.all(
          columns.map(({ id }) => this.pool.query<Card>(`SELECT id, name FROM cards WHERE column_id='${id}'`)),
        )
      ).map(({ rows }) => rows);

      return { ...board[0], columns: columns.map((column, i) => ({ ...column, cards: cards[i] })) };
    }

    return { ...board[0], columns: [] };
  }

  async create(userId: string, workspaceId: string, name: string): Promise<Board> {
    const { rows } = await this.pool.query<Board>(
      `INSERT INTO boards (name, user_id, workspace_id) VALUES ('${name}', '${userId}', '${workspaceId}') RETURNING id, name, user_id as "userId", workspace_id AS "workspaceId"`,
    );

    return { ...rows[0], columns: [] };
  }

  async updateById(userId: string, boardId: string, name: string): Promise<Board> {
    const { rows: board } = await this.pool.query<Board>(
      `UPDATE boards set name='${name}' WHERE id='${boardId}' AND user_id='${userId}' RETURNING id, name, user_id as "userId", workspace_id AS "workspaceId"`,
    );
    const { rows: columns } = await this.pool.query<Column>(
      `SELECT id, name, column_id AS "columnId" FROM columns WHERE board_id='${board[0].id}'`,
    );
    const cards = (
      await Promise.all(
        columns.map(({ id }) => this.pool.query<Card>(`SELECT id, name FROM cards WHERE column_id='${id}'`)),
      )
    ).map(({ rows }) => rows);

    return { ...board[0], columns: columns.map((column, i) => ({ ...column, cards: cards[i] })) };
  }

  async deleteById(userId: string, boardId: string) {
    await this.pool.query(`DELETE FROM boards WHERE id='${boardId}' AND user_id='${userId}'`);
  }
}
