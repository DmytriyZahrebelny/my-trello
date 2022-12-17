import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { HTTP_CODE } from '../constants';
import { createAccessToken, createRefreshToken, sendRefreshToken } from '../lib/jwt';
import { UserService } from './user.service';
import { userValidator } from './user.middleware';
import { LoginParams } from './user.types';

export class UserController {
  public router = express.Router();

  constructor(private readonly userService: UserService) {
    this.userService = userService;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post('/register', userValidator(this.userService), this.register.bind(this));
    this.router.get('/login', this.login.bind(this));
    this.router.put('/logout', this.logout.bind(this));
  }

  async register(req: Request, res: Response) {
    const user = await this.userService.create(req.body);

    res.status(HTTP_CODE.CREATED).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password }: LoginParams = req.body;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      return res.status(HTTP_CODE.UNAUTHORIZED).send({ meassage: 'Email or password are wrong' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const accessToken = createAccessToken(user.id);
      const refreshToken = createRefreshToken(user.id);

      await this.userService.setRefreshToken(refreshToken, user.id);

      sendRefreshToken(res, refreshToken);
      res.status(HTTP_CODE.OK).send({
        accessToken,
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    } else {
      res.status(HTTP_CODE.UNAUTHORIZED).send({ meassage: 'Email or password are wrong' });
    }
  }

  async logout(req: Request, res: Response) {
    const { userId } = req.body;
    res.clearCookie('refreshtoken', { path: '/refresh_token' });

    await this.userService.removeRefreshToken(userId as string);

    return res.send({ message: 'Logged out' });
  }
}
