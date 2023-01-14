import { pool } from '../lib/db';

export class WorkSpacesService {
  async findAll(userId: string) {
    const { rows } = await pool.query(`SELECT name, id FROM work_spaces WHERE owner_id='${userId}'`);

    return rows;
  }

  async create(userId: string, name: string) {
    const { rows } = await pool.query(
      `INSERT INTO work_spaces (name, owner_id) VALUES ('${name}', '${userId}') RETURNING name, id`
    );

    return rows[0];
  }

  async updateByWorkSpaceId(workSpaceId: string, name: string) {
    const { rows } = await pool.query(
      `UPDATE work_spaces set name='${name}' WHERE id='${workSpaceId}' RETURNING name, id`
    );

    return rows[0];
  }

  async deleteByWorkSpaceId(workSpaceId: string) {
    const { rows } = await pool.query(`DELETE FROM work_spaces WHERE id='${workSpaceId}'`);

    return rows[0];
  }
}
