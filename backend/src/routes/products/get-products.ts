import express from 'express';
import { protectRoute } from '../../common';
import { getRepository } from 'typeorm';

import { Product } from '../../entity';

const router = express.Router();

router.get('/api/products', protectRoute, async (req, res) => {
  const products = await getRepository(Product).find();

  res.status(200).send({
    data: {
      products,
    },
  });
});

export { router as getProductsRouter };
