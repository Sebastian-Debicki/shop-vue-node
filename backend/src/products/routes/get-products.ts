import express from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity/Product';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  const products = await getRepository(Product).find()

  res.status(200).send({
    products
  })
});

export { router as getProductsRouter };
