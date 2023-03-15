import type { Workspace } from '@shared/types';

import { db } from '../../common/database';

export class WorkSpacesService {
  private pool = db;

  async findAll(userId: string): Promise<Workspace[]> {
    const { rows } = await this.pool.query<Omit<Workspace, 'userId'> & { user_id: string }>(
      `SELECT * FROM work_spaces WHERE user_id='${userId}'`
    );

    return rows.map(({ user_id, ...rest }) => ({ userId: user_id, ...rest }));
  }

  async create(userId: string, name: string): Promise<Workspace> {
    const { rows } = await this.pool.query<Omit<Workspace, 'userId'> & { user_id: string }>(
      `INSERT INTO work_spaces (name, user_id) VALUES ('${name}', '${userId}') RETURNING name, id, user_id`
    );

    const { user_id, ...rest } = rows[0];

    return { userId: user_id, ...rest };
  }

  async updateByWorkSpaceId(id: string, name: string): Promise<Workspace> {
    const { rows } = await this.pool.query<Omit<Workspace, 'userId'> & { user_id: string }>(
      `UPDATE work_spaces set name='${name}' WHERE id='${id}' RETURNING name, id, user_id`
    );

    const { user_id, ...rest } = rows[0];

    return { userId: user_id, ...rest };
  }

  async deleteByWorkSpaceId(id: string) {
    await this.pool.query(`DELETE FROM work_spaces WHERE id='${id}'`);
  }
}
