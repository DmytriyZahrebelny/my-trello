import type { Workspace } from '@shared/types';

import { db } from '../../common/database';

export class WorkspaceService {
  private pool = db;

  async findAll(userId: string): Promise<Workspace[]> {
    const { rows: workspaces } = await this.pool.query<Workspace>(
      `SELECT id, name, user_id AS "userId" FROM workspaces WHERE user_id='${userId}'`,
    );
    const boards = (
      await Promise.all(
        workspaces.map(({ id }) =>
          this.pool.query<{ count: string }>(`SELECT COUNT(*) FROM boards WHERE workspace_id='${id}'`),
        ),
      )
    ).map(({ rows }) => rows[0]);

    return workspaces.map((workspace, i) => ({ ...workspace, boardCount: boards[i].count }));
  }

  async create(userId: string, name: string): Promise<Workspace> {
    const { rows } = await this.pool.query<Workspace>(
      `INSERT INTO workspaces (name, user_id) VALUES ('${name}', '${userId}') RETURNING name, id`,
    );

    return { ...rows[0], boardCount: '0' };
  }

  async updateById(userId: string, workspaceId: string, name: string): Promise<Workspace> {
    const { rows: workspace } = await this.pool.query<Workspace>(
      `UPDATE workspaces SET name='${name}' WHERE id='${workspaceId}' AND user_id='${userId}' RETURNING name, id`,
    );
    const { rows: boardCount } = await this.pool.query<{ count: string }>(
      `SELECT COUNT(*) FROM boards WHERE workspace_id='${workspace[0].id}'`,
    );

    return { ...workspace[0], boardCount: boardCount[0].count };
  }

  async deleteById(userId: string, workspaceId: string) {
    await this.pool.query(`DELETE FROM workspaces WHERE id='${workspaceId}' AND user_id='${userId}'`);
  }
}
