import express from 'express';
import 'express-async-errors';
import createError from 'http-errors';

import { errorHandler } from './common/helpers/error-handler';
import { getProductsRouter } from './products/routes/get-products';
import { createProductRouter } from './products/routes/create-product';
import { deleteProductRouter } from './products/routes/delete-product';
import { updateProductRouter } from './products/routes/update-product';

const app = express();

app.use(express.json());

app.use(getProductsRouter);
app.use(createProductRouter);
app.use(deleteProductRouter);
app.use(updateProductRouter);

app.all('*', async (req, res) => {
  throw new createError.NotFound();
});

app.use(errorHandler);

export { app };
