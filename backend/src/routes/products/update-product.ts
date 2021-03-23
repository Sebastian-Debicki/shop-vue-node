import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { productValidator, validateRequest } from '../../common';
import { Product } from '../../entity';

const router = express.Router();

router.post(
  '/api/products/:id',
  productValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const productRepo = getRepository(Product);
    const { price, description } = req.body;

    const product = await productRepo.findOne({ where: { id: req.params.id } });

    if (product) {
      await productRepo.update(product, {
        price,
        description,
      });
    }

    res.status(201).send({
      data: {
        ...product,
        price,
        description,
      },
    });
  },
);

export { router as updateProductRouter };
