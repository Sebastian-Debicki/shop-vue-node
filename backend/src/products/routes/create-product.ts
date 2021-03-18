import express from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity/Product';

const router = express.Router();

router.post('/api/products', async (req, res) => {
  const productRepo = getRepository(Product);

  const product = productRepo.create({
    price: req.body.price,
    description: req.body.description,
  });

  await productRepo.save(product);

  res.status(201).send(product);
});

export { router as createProductRouter };
