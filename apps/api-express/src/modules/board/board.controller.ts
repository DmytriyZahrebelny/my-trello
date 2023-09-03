import express from 'express';

import type { Response, Request, Next } from '../../common/types';
import { authenticateJwt } from '../../common/middleware';
import { HTTP_CODE } from '../../common/constants';
import { BoardService } from './board.service';
import { CreateBoardDto, UpdateBoardDto, BoardDto } from './dto';

export class BoardController {
  public router = express.Router();

  constructor(private readonly boardService: BoardService) {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/board', authenticateJwt, this.getBoard.bind(this));
    this.router.post('/board', authenticateJwt, this.create.bind(this));
    this.router.put('/board', authenticateJwt, this.update.bind(this));
    this.router.delete('/board', authenticateJwt, this.delete.bind(this));
  }

  async getBoard(req: Request<BoardDto>, res: Response, next: Next) {
    try {
      const data = await this.boardService.findById(req.body.id);
      res.status(HTTP_CODE.OK).send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request<CreateBoardDto>, res: Response, next: Next) {
    try {
      const newBoard = await this.boardService.create(res.locals.userId, req.body.workspaceId, req.body.name);
      res.status(HTTP_CODE.CREATED).send(newBoard);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request<UpdateBoardDto>, res: Response, next: Next) {
    try {
      const board = await this.boardService.updateById(res.locals.userId, req.body.id, req.body.name);
      res.status(HTTP_CODE.OK).send(board);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request<BoardDto>, res: Response, next: Next) {
    try {
      await this.boardService.deleteById(res.locals.userId, req.body.id);
      res.status(HTTP_CODE.OK).send({ messasge: 'success' });
    } catch (error) {
      next(error);
    }
  }
}
