import express from 'express';
import { getRepository } from 'typeorm';
import { Unauthorized } from 'http-errors';

import { Order } from '../../entity';
import { protectRoute } from '../../common';

const router = express.Router();

router.delete('/api/orders/:id', protectRoute, async (req, res) => {
  const orderRepo = getRepository(Order);
  const order = await orderRepo.findOne({ where: { id: req.params.id } });

  if (req.currentUser?.id !== order?.userId)
    throw new Unauthorized(
      `Sorry, you can't delete order that is not belong to you.`,
    );

  await orderRepo
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id: req.params.id })
    .execute();

  res.status(204).send({});
});

export { router as deleteOrderRouter };
