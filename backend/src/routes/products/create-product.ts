import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../entity';
import { productValidator, validateRequest } from '../../common';

const router = express.Router();

router.post(
  '/api/products',
  productValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const productRepo = getRepository(Product);

    const product = productRepo.create({
      price: req.body.price,
      description: req.body.description,
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
