import express from 'express';
import 'express-async-errors';
import createError from 'http-errors';

import { errorController, protectRoute } from './common';
import {
  getProductsRouter,
  createProductRouter,
  deleteProductRouter,
  updateProductRouter,
} from './routes/products';
import { signupRouter, getUsersRouter, signinRouter } from './routes/auth';

const app = express();

app.use(express.json());

app.use(getProductsRouter);
app.use(createProductRouter);
app.use(deleteProductRouter);
app.use(updateProductRouter);

app.use(signupRouter);
app.use(signinRouter);
app.use(getUsersRouter);

app.all('*', async (req, res, next) => {
  next(new createError.NotFound(`Can't find ${req.originalUrl}`));
});

app.use(errorController);

export { app };
