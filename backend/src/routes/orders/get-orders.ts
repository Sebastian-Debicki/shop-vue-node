import express from 'express';
import { getRepository } from 'typeorm';

import { Order } from '../../entity';
import { protectRoute } from '../..//common';

const router = express.Router();

router.get('/api/orders', protectRoute, async (req, res) => {
  const orders = await getRepository(Order).find();

  res.status(200).send({
    data: {
      orders,
    },
  });
});

export { router as getOrdersRouter };
