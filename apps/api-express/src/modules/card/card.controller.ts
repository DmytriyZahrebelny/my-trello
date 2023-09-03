import express from 'express';

import type { Response, Request, Next } from '../../common/types';
import { HTTP_CODE } from '../../common/constants';
import { authenticateJwt } from '../../common/middleware';
import { CardService } from './card.service';
import { CreateCardDto, UpdateCardDto, CardDto } from './dto';

export class CardController {
  public router = express.Router();

  constructor(private readonly cardService: CardService) {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/card', authenticateJwt, this.getCard.bind(this));
    this.router.post('/card', authenticateJwt, this.create.bind(this));
    this.router.put('/card', authenticateJwt, this.update.bind(this));
    this.router.delete('/card', authenticateJwt, this.delete.bind(this));
  }

  async getCard(req: Request<CardDto>, res: Response, next: Next) {
    try {
      const data = await this.cardService.find(req.body.id);
      res.status(HTTP_CODE.OK).send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request<CreateCardDto>, res: Response, next: Next) {
    try {
      const data = await this.cardService.create(res.locals.userId, req.body.columnId, req.body.name);
      res.status(HTTP_CODE.CREATED).send(data);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request<UpdateCardDto>, res: Response, next: Next) {
    try {
      const data = await this.cardService.updateById(res.locals.userId, req.body.id, req.body.name);
      res.status(HTTP_CODE.OK).send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request<CardDto>, res: Response, next: Next) {
    try {
      const data = await this.cardService.deleteById(res.locals.userId, req.body.id);
      res.status(HTTP_CODE.OK).send(data);
    } catch (error) {
      next(error);
    }
  }
}
