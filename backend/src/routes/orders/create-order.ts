import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Order, Product } from '../../entity';
import { validateRequest, protectRoute, orderValidator } from '../../common';

const router = express.Router();

router.post(
  '/api/orders',
  protectRoute,
  orderValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { products, deliveryType, deliveryCosts } = req.body;

    const orderRepo = await getRepository(Order);

    const totalPrice = products.reduce(
      (t: number, cur: Product) => (t += cur.price),
      0,
    );

    const order = orderRepo.create({
      userId: req.currentUser?.id,
      deliveryType,
      deliveryCosts,
      totalPrice: Number(totalPrice),
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
