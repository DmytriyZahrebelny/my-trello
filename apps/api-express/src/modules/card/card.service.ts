import type { Card } from '@shared/types';

import { db } from '../../common/database';

export class CardService {
  private pool = db;

  async find(cardId: string): Promise<Card> {
    const { rows } = await this.pool.query<Card>(
      `SELECT id, name, column_id AS "columnId", user_id AS "userId" FROM cards WHERE id='${cardId}'`,
    );

    return rows[0];
  }

  async create(userId: string, columnId: string, name: string): Promise<Card> {
    const { rows } = await this.pool.query<Card>(
      `INSERT INTO cards (name, column_id, user_id) VALUES ('${name}', '${columnId}', '${userId}') RETURNING name, id`,
    );

    return rows[0];
  }

  async updateById(userId: string, cardId: string, name: string): Promise<Card> {
    const { rows } = await this.pool.query<Card>(
      `UPDATE cards set name='${name}' WHERE id='${cardId}' AND user_id='${userId}' RETURNING name, id`,
    );

    return rows[0];
  }

  async deleteById(userId: string, cardId: string): Promise<void> {
    await this.pool.query(`DELETE FROM cards WHERE id='${cardId}' AND user_id='${userId}'`);
  }
}
