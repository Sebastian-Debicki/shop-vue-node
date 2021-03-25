import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Order } from '../../entity';
import { validateRequest, protectRoute } from '../../common';

const router = express.Router();

router.post(
  '/api/orders',
  protectRoute,
  validateRequest,
  async (req: Request, res: Response) => {
    const { products } = req.body;

    const orderRepo = getRepository(Order);

    const order = orderRepo.create({
      userId: req.currentUser?.id,
      products,
    });

    await orderRepo.save(order);

    res.status(201).send({
      data: {
        order,
      },
    });
  },
);

export { router as createOrderRouter };
