import express from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity/Product';

const router = express.Router();

router.delete('/api/products/:id', async (req, res) => {
  const productRepo = getRepository(Product);

  await productRepo
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id: req.params.id })
    .execute();

  res.status(204).send({});
});

export { router as deleteProductRouter };
