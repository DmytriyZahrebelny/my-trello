import express, { Request, Response, NextFunction } from 'express';

import { authenticateJwt } from '../../common/middleware/index';
import { BoardsService } from './boards.services';

export class BoardsController {
  public router = express.Router();

  constructor(private readonly boardsService: BoardsService) {
    this.boardsService = boardsService;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/boards', authenticateJwt, this.getBoards);
    this.router.post('/boards', authenticateJwt, this.createBoard);
  }

  async getBoards(req: Request, res: Response): Promise<void> {
    const data = await this.boardsService.finlAll();

    res.status(200);
    res.send(data);
  }

  async createBoard(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name }: { name: string } = await req.body;

    try {
      const result = await this.boardsService.create(name);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}
