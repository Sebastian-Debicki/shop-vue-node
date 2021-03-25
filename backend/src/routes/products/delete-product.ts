import express from 'express';
import { Unauthorized } from 'http-errors';
import { getRepository } from 'typeorm';

import { protectRoute } from '../../common';
import { Product } from '../../entity/Product';

const router = express.Router();

router.delete('/api/products/:id', protectRoute, async (req, res) => {
  const productRepo = getRepository(Product);
  const product = await productRepo.findOne({ where: { id: req.params.id } });

  if (req.currentUser?.id !== product?.userId)
    throw new Unauthorized(
      `Sorry, you can't delete product that is not belong to you.`,
    );

  await productRepo
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id: req.params.id })
    .execute();

  res.status(204).send({});
});

export { router as deleteProductRouter };
