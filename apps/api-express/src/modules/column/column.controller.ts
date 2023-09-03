import express from 'express';

import type { Response, Request, Next } from '../../common/types';
import { HTTP_CODE } from '../../common/constants';
import { authenticateJwt } from '../../common/middleware';
import { ColumnService } from './column.service';
import { CreateColumnDto, UpdateColumnDto, DeleteColumnDto } from './dto';

export class ColumnController {
  public router = express.Router();

  constructor(private readonly columnService: ColumnService) {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post('/column', authenticateJwt, this.create.bind(this));
    this.router.put('/column', authenticateJwt, this.update.bind(this));
    this.router.delete('/column', authenticateJwt, this.delete.bind(this));
  }

  async create(req: Request<CreateColumnDto>, res: Response, next: Next) {
    try {
      const data = await this.columnService.create(res.locals.userId, req.body.boardId, req.body.name);
      res.status(HTTP_CODE.CREATED).send(data);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request<UpdateColumnDto>, res: Response, next: Next) {
    try {
      const data = await this.columnService.updateById(res.locals.userId, req.body.id, req.body.name);
      res.status(HTTP_CODE.OK).send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request<DeleteColumnDto>, res: Response, next: Next) {
    try {
      await this.columnService.deleteById(res.locals.userId, req.body.id);
      res.status(HTTP_CODE.OK).send({ messasge: 'success' });
    } catch (error) {
      next(error);
    }
  }
}
