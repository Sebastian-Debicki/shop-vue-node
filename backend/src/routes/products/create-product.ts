import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity';
import { productValidator, validateRequest, protectRoute } from '../../common';

const router = express.Router();

router.post(
  '/api/products',
  protectRoute,
  productValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, price, promotion, creationDate, description } = req.body;

    const productRepo = getRepository(Product);

    const product = productRepo.create({
      name,
      price,
      promotion,
      creationDate,
      description,
      userId: req.currentUser?.id,
    });

    await productRepo.save(product);

    res.status(201).send({
      data: {
        product,
      },
    });
  },
);

export { router as createProductRouter };
