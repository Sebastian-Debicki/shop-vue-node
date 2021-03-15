import express from 'express';

import { getProductsRouter } from './products/routes/get-products';
import { createProductRouter } from './products/routes/create-product';

const app = express();

app.use(express.json());

app.use(getProductsRouter);
app.use(createProductRouter);

export { app };
