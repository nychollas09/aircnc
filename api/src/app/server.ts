import App from './app';
import { SessionController } from './controller/session.controller';

const app = new App({
  port: Number(process.env.PORT) || 3333,
  controllers: [new SessionController()],
});

app.listen();
