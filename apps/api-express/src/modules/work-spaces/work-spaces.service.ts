import { DatabaseService } from '../../common/database/database.service';

export class WorkSpacesService extends DatabaseService {
  async findAll(userId: string) {
    const { rows } = await this.query(`SELECT name, id FROM work_spaces WHERE owner_id='${userId}'`);

    return rows;
  }

  async create(userId: string, name: string) {
    const { rows } = await this.query(
      `INSERT INTO work_spaces (name, owner_id) VALUES ('${name}', '${userId}') RETURNING name, id`
    );

    return rows[0];
  }

  async updateByWorkSpaceId(id: string, name: string) {
    const { rows } = await this.query(`UPDATE work_spaces set name='${name}' WHERE id='${id}' RETURNING name, id`);

    return rows[0];
  }

  async deleteByWorkSpaceId(id: string) {
    const { rows } = await this.query(`DELETE FROM work_spaces WHERE id='${id}'`);

    return rows[0];
  }
}
