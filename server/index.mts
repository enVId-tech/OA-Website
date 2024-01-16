import express from 'express';
import cors from 'cors';

const app: express.Express = express();

// Library Initalization

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});