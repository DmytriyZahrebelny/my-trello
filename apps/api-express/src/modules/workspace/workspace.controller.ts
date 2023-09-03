import express from 'express';

import type { Response, Request, Next } from '../../common/types';
import { HTTP_CODE } from '../../common/constants';
import { authenticateJwt } from '../../common/middleware';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto, UpdateWorkspaceDto, DeleteWorkspaceDto } from './dto';

export class WorkspaceController {
  public router = express.Router();

  constructor(private readonly workspaceService: WorkspaceService) {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/workspace', authenticateJwt, this.getList.bind(this));
    this.router.post('/workspace', authenticateJwt, this.create.bind(this));
    this.router.put('/workspace', authenticateJwt, this.update.bind(this));
    this.router.delete('/workspace', authenticateJwt, this.delete.bind(this));
  }

  async getList(req: Request, res: Response, next: Next) {
    try {
      const workSpaces = await this.workspaceService.findAll(res.locals.userId);
      res.status(HTTP_CODE.OK).send(workSpaces);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request<CreateWorkspaceDto>, res: Response, next: Next) {
    try {
      const workSpace = await this.workspaceService.create(res.locals.userId, req.body.name);
      res.status(HTTP_CODE.CREATED).send(workSpace);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request<UpdateWorkspaceDto>, res: Response, next: Next) {
    try {
      const workSpace = await this.workspaceService.updateById(res.locals.userId, req.body.id, req.body.name);
      res.status(HTTP_CODE.OK).send(workSpace);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request<DeleteWorkspaceDto>, res: Response, next: Next) {
    try {
      await this.workspaceService.deleteById(res.locals.userId, req.body.id);
      res.status(HTTP_CODE.OK).send({ messasge: 'success' });
    } catch (error) {
      next(error);
    }
  }
}
