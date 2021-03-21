import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

import { app } from './app';

dotenv.config();

const start = () => {
  if (!process.env.MAIN_PORT)
    throw new Error('env variable MAIN_PORT must be defined.');

  if (!process.env.JWT_SECRET)
    throw new Error('env variable JWT_SECRET must be defined.');

  if (!process.env.JWT_EXPIRES_IN)
    throw new Error('env variable JWT_EXPIRES_IN must be defined.');

  createConnection()
    .then(() => console.log('DB connection success!'))
    .catch((err) => console.log(err));

  const portNumber = process.env.MAIN_PORT;
  app.listen(portNumber, () => {
    console.log(`Backend is listening on port: http://localhost:${portNumber}`);
  });
};

start();
