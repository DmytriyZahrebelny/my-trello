import bcrypt from 'bcrypt';

import { pool } from '../lib/db';
import { RegisterParams, User } from './user.types';

export class UserService {
  async create({ name, email, password }: RegisterParams): Promise<Omit<User, 'password'>> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await pool.query(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashPassword}') RETURNING name, email, id`
    );

    return result.rows[0];
  }

  async findByEmail(email: string): Promise<undefined | User> {
    const { rows } = await pool.query<User & { refresh_token: string }>(
      `SELECT * FROM users WHERE users.email='${email}'`
    );

    const [user] = rows;
    if (user) {
      const { refresh_token, ...rest } = user;
      return { ...rest, refreshToken: refresh_token };
    }
  }

  async findById(id: string): Promise<undefined | Omit<User, 'refreshToken' | 'password'>> {
    const { rows } = await pool.query<User & { refresh_token: string }>(`SELECT * FROM users WHERE users.id='${id}'`);

    const [user] = rows;
    if (user) {
      const { email, name, id } = user;
      return { email, name, id };
    }
  }

  async findByToken(token: string): Promise<undefined | User> {
    const user = await pool.query<User>(`SELECT * FROM users WHERE users.refresh_token='${token}'`);
    return user.rows[0];
  }

  async refreshToken(refreshToken: string, userId: string) {
    await pool.query(`UPDATE users set refresh_token='${refreshToken}' WHERE users.id='${userId}'`);
  }

  async removeRefreshToken(userId: string) {
    await pool.query(`UPDATE users set refresh_token=null WHERE users.id='${userId}'`);
  }
}
