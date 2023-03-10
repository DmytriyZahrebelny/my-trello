import { db } from '../../common/database';

export class WorkSpacesService {
  private pool = db;

  async findAll(userId: string) {
    const { rows } = await this.pool.query(`SELECT * FROM work_spaces WHERE user_id='${userId}'`);

    return rows;
  }

  async create(userId: string, name: string) {
    const { rows } = await this.pool.query(
      `INSERT INTO work_spaces (name, user_id) VALUES ('${name}', '${userId}') RETURNING name, id`
    );

    return rows[0];
  }

  async updateByWorkSpaceId(id: string, name: string) {
    const { rows } = await this.pool.query(`UPDATE work_spaces set name='${name}' WHERE id='${id}' RETURNING name, id`);

    return rows[0];
  }

  async deleteByWorkSpaceId(id: string) {
    const { rows } = await this.pool.query(`DELETE FROM work_spaces WHERE id='${id}'`);

    return rows[0];
  }
}
