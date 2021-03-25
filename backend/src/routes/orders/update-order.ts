import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Unauthorized } from 'http-errors';

import { Order } from '../../entity';
import { validateRequest, protectRoute, orderValidator } from '../../common';

const router = express.Router();

router.post(
  '/api/orders/:id',
  protectRoute,
  orderValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { products } = req.body;

    const orderRepo = await getRepository(Order);

    const order = await orderRepo.findOne({ where: { id: req.params.id } });

    if (req.currentUser?.id !== order?.userId)
      throw new Unauthorized(
        `Sorry, you can't update order that is not belong to you.`,
      );

    if (order) {
      await orderRepo.save({
        ...order,
        products,
      });
    }

    res.status(201).send({
      data: {
        order: {
          ...order,
          products,
        },
      },
    });
  },
);

export { router as updateOrderRouter };
