import { environment } from './../environments/environment';
import express, { Application, Router } from 'express';
import mongoose from 'mongoose';

export default class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; controllers: { router: Router }[] }) {
    this.app = express();
    this.port = appInit.port;
    this.app.use(express.json());
    this.routes(appInit.controllers);
    this.databaseConnection();
  }

  public routes(controllers: { router: Router }[]): void {
    controllers.forEach((controller) => {
      this.app.use('', controller.router);
    });
  }

  private databaseConnection(): void {
    mongoose.connect(environment.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}
