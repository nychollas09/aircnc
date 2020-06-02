import { ControllerBase } from '../domain/interface/controller-base';
import { Router, Request, Response } from 'express';

export class SessionController implements ControllerBase {
  path: string = '/session';
  router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.session());
  }

  public session() {
    return (request: Request, response: Response) => {
      response.json({
        message: 'teste session controller  rrrr',
      });
    };
  }
}
