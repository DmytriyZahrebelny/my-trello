import { Pool, QueryResult, QueryResultRow } from 'pg';

export class DatabaseService {
  public pool = new Pool({
    host: 'db',
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  async query<T>(sql: string): Promise<QueryResult<T extends QueryResultRow ? T : QueryResultRow>> {
    return await this.pool.query(sql);
  }
}
