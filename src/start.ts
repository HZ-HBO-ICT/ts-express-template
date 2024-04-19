// start.js setup from learnnode.com by Wes Bos
import Express, { Application } from 'express';
import * as Dotenv from 'dotenv';
Dotenv.config({ path: 'variables.env' });
import IndexRouter from './routes/index.js';

const app: Application = Express();
const port: number = 3010;

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', IndexRouter);

app.listen(port, () => {
  console.log(`🍿 Express running → PORT ${port}`);
});
