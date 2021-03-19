import express from 'express';
import 'express-async-errors';
import createError from 'http-errors';

import { errorController } from './common';
import {
  getProductsRouter,
  createProductRouter,
  deleteProductRouter,
  updateProductRouter,
} from './products';

const app = express();

app.use(express.json());

app.use(getProductsRouter);
app.use(createProductRouter);
app.use(deleteProductRouter);
app.use(updateProductRouter);

app.all('*', async (req, res, next) => {
  next(new createError.NotFound(`Can't find ${req.originalUrl}`));
});

app.use(errorController);

export { app };
