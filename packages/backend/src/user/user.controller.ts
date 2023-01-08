import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { HTTP_CODE } from '../constants';
import { createTokens } from '../lib/jwt';
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
    this.router.post('/sign-up', userValidator(this.userService), this.signUp.bind(this));
    this.router.post('/sign-in', this.signIn.bind(this));
    this.router.post('/refresh-token', this.refreshToken.bind(this));
    this.router.put('/logout', this.logout.bind(this));
  }

  async signUp(req: Request, res: Response) {
    const user = await this.userService.create(req.body);

    res.status(HTTP_CODE.CREATED).json(user);
  }

  async signIn(req: Request, res: Response) {
    const { email, password }: LoginParams = req.body;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      return res.status(HTTP_CODE.UNAUTHORIZED).send({ meassage: 'Email or password are wrong' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const { accessToken, refreshToken, accessTokenExpiresIn, refreshTokenExpiresIn } = createTokens(user.id);

      await this.userService.refreshToken(refreshToken, user.id);

      res.status(HTTP_CODE.OK).send({
        refreshToken,
        accessToken,
        accessTokenExpiresIn,
        refreshTokenExpiresIn,
        id: user.id,
        email: user.email,
        name: user.name,
      });
    } else {
      res.status(HTTP_CODE.UNAUTHORIZED).send({ meassage: 'Email or password are wrong' });
    }
  }

  async refreshToken(req: Request, res: Response) {
    const { refreshToken: token }: { refreshToken: string } = req.body;

    if (!token) return res.send({ accessToken: '' });

    const user = await this.userService.findByToken(token);

    if (!user) return res.send({ accessToken: '' });

    const { accessToken, refreshToken, accessTokenExpiresIn, refreshTokenExpiresIn } = createTokens(user.id);

    await this.userService.refreshToken(refreshToken, user.id);

    return res.send({ accessToken, refreshToken, accessTokenExpiresIn, refreshTokenExpiresIn });
  }

  async logout(req: Request, res: Response) {
    const { userId } = req.body;

    await this.userService.removeRefreshToken(userId as string);

    return res.send({ message: 'Logged out' });
  }
}
