import express, { Request, Response } from 'express';

import { HTTP_CODE } from '../constants/index';
import { WorkSpacesService } from './work-spaces.service';
import { authenticateJwt } from '../middleware/index';

export class WorkSpacesController {
  public router = express.Router();

  constructor(private readonly workSpacesService: WorkSpacesService) {
    this.workSpacesService = workSpacesService;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/work-spaces', authenticateJwt, this.getAllWorkSpaces.bind(this));
    this.router.post('/work-spaces', authenticateJwt, this.createWorkSpace.bind(this));
    this.router.put('/work-spaces', authenticateJwt, this.updateWorkSpace.bind(this));
    this.router.delete('/work-spaces', authenticateJwt, this.deleteWorkSpace.bind(this));
  }

  async getAllWorkSpaces(req: Request, res: Response) {
    const userId = res.locals.userId;

    const workSpaces = await this.workSpacesService.findAll(userId);

    res.status(HTTP_CODE.OK).send(workSpaces);
  }

  async createWorkSpace(req: Request, res: Response) {
    const { name } = req.body;
    const userId = res.locals.userId;

    const workSpace = await this.workSpacesService.create(userId, name);

    res.status(HTTP_CODE.CREATED).send(workSpace);
  }

  async updateWorkSpace(req: Request, res: Response) {
    const { name, id } = req.body;

    const workSpace = await this.workSpacesService.updateByWorkSpaceId(id, name);

    res.status(HTTP_CODE.OK).send(workSpace);
  }

  async deleteWorkSpace(req: Request, res: Response) {
    const { id } = req.body;

    await this.workSpacesService.deleteByWorkSpaceId(id);

    res.status(HTTP_CODE.CREATED).send({ messasge: 'success' });
  }
}
