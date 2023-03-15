import bcrypt from 'bcrypt';

import { db } from '../../common/database';
import { SignUpDto } from './dto';
import type { RefreshTokenDB, RefreshToken, User } from './user.types';

export class UserService {
  private pool = db;

  async create({ name, email, password }: SignUpDto): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const { rows } = await this.pool.query<User>(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashPassword}') RETURNING name, email, id`
    );

    return rows[0];
  }

  async findByEmail(email: string): Promise<undefined | (User & RefreshToken)> {
    const { rows } = await this.pool.query<User & RefreshTokenDB>(`SELECT * FROM users WHERE users.email='${email}'`);

    const [user] = rows;
    if (user) {
      const { refresh_token, ...rest } = user;
      return { ...rest, refreshToken: refresh_token };
    }
  }

  async findById(id: string): Promise<undefined | User> {
    const { rows } = await this.pool.query<User & RefreshTokenDB>(`SELECT * FROM users WHERE users.id='${id}'`);

    return rows[0];
  }

  async findByToken(token: string): Promise<undefined | User> {
    const user = await this.pool.query<User>(`SELECT * FROM users WHERE users.refresh_token='${token}'`);
    return user.rows[0];
  }

  async refreshToken(refreshToken: string, userId: string) {
    await this.pool.query(`UPDATE users set refresh_token='${refreshToken}' WHERE users.id='${userId}'`);
  }

  async removeRefreshToken(userId: string) {
    await this.pool.query(`UPDATE users set refresh_token=null WHERE users.id='${userId}'`);
  }
}
