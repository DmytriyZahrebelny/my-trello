import { Column, Card } from '@shared/types';

import { db } from '../../common/database';

export class ColumnService {
  private pool = db;

  async create(userId: string, boardId: string, name: string): Promise<Column> {
    const { rows } = await this.pool.query<Column>(
      `INSERT INTO columns (name, user_id, board_id) VALUES ('${name}', '${userId}', '${boardId}') RETURNING name, id, board_id AS "boardId"`,
    );

    return { ...rows[0], cards: [] };
  }

  async updateById(userId: string, columnId: string, name: string): Promise<Column> {
    const { rows } = await this.pool.query<Column>(
      `UPDATE columns SET name='${name}' WHERE id='${columnId}' RETURNING name, id, board_id AS "boardId"`,
    );

    const { rows: cards } = await this.pool.query<Card>(
      `SELECT id, name FROM cards WHERE column_id='${columnId}' AND user_id='${userId}'`,
    );

    return { ...rows[0], cards };
  }

  async deleteById(userId: string, columnId: string) {
    await this.pool.query(`DELETE FROM columns WHERE id='${columnId}' AND user_id='${userId}'`);
  }
}
