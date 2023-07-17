import { db } from '../../common/database';

export class BoardsService {
  private pool = db;

  async finlAll() {
    const { rows } = await this.pool.query<{ row: unknown[] }>('SELECT * FROM boards');

    return rows;
  }

  async create(name: string) {
    const { rows } = await this.pool.query<{ row: unknown[] }>(`INSERT INTO boards (name) VALUES ('${name}')`);

    return rows;
  }
}
