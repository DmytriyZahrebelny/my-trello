import { db } from '../../common/database';

export class BoardsService {
  private pool = db;

  async finlAll() {
    const { rows } = await this.pool.query('SELECT * FROM boards');

    return rows;
  }

  async create(name: string) {
    const { rows } = await this.pool.query(`INSERT INTO boards (name) VALUES ('${name}')`);

    return rows;
  }
}
