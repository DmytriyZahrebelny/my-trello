import { Pool } from 'pg';

export const pool = new Pool({
  host: 'db',
  port: 5432,
  database: 'trello_db',
  user: 'postgres',
  password: '1',
});
