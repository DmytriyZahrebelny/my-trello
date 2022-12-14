import express, { Request, Response, NextFunction } from 'express';
import { pool } from '../lib/db';

export class BoardsController {
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get('/boards', this.getBoards);
    this.router.post('/create-board', this.createBoard);
    console.log(true);
  }

  async getBoards(req: Request, res: Response): Promise<void> {
    const data = await pool.query('SELECT * FROM boards');
    res.status(200);
    res.send(data.rows);
  }

  async createBoard(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { boardName }: { boardName: string } = await req.body;

    try {
      const result = await pool.query(`INSERT INTO boards (name) VALUES ('${boardName}')`);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}
