import express from 'express';

import { getProductsRouter } from './products/routes/get-products';
import { createProductRouter } from './products/routes/create-product';
import { createConnection } from 'typeorm';

const app = express();

app.use(express.json());

createConnection().then(() => console.log('DB connection success!')).catch((err) => console.log(err))

app.use(getProductsRouter);
app.use(createProductRouter);

export { app };
