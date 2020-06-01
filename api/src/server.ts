import express, { Request, Response } from 'express';

const app = express();

app.get('/user', (request: Request, response: Response) => {
  return response.json({
    message: 'Olá Word!',
  });
});

app.listen(process.env.PORT || 3333);
