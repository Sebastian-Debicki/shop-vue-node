import express from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity/Product';

const router = express.Router();

router.post('/api/products/:id', async (req, res) => {
  const productRepo = getRepository(Product);

  const product = await productRepo.findOne({ where: { id: req.params.id } });

  if (product) {
    await productRepo.update(product, {
      price: req.body.price,
      description: req.body.description,
    });
  } else return;

  res.status(201).send({
    ...product,
    price: req.body.price,
    description: req.body.description,
  });
});

export { router as updateProductRouter };
