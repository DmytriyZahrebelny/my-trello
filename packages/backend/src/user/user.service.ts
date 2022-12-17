import bcrypt from 'bcrypt';

import { pool } from '../lib/db';
import { RegisterParams, User } from './user.types';

export class UserService {
  async create({ firstname, lastname, email, password }: RegisterParams): Promise<Omit<User, 'password'>> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await pool.query(
      `INSERT INTO users (firstname, lastname, email, password) VALUES ('${firstname}', '${lastname}', '${email}', '${hashPassword}') RETURNING firstname, lastname, email, id`
    );

    return result.rows[0];
  }

  async findByEmail(email: string): Promise<undefined | User> {
    const user = await pool.query<User>(`SELECT * FROM users WHERE users.email='${email}'`);
    return user.rows[0];
  }

  async setRefreshToken(refreshToken: string, userId: string) {
    await pool.query(`UPDATE users set refreshtoken='${refreshToken}' WHERE user.id='${userId}'`);
  }

  async removeRefreshToken(userId: string) {
    await pool.query(`UPDATE users set refreshtoken=null WHERE user.id='${userId}'`);
  }
}
