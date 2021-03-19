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

    const product = await productRepo.findOne({ where: { id: req.params.id } });

    if (product) {
      await productRepo.update(product, {
        price: req.body.price,
        description: req.body.description,
      });
    } else return;

    res.status(201).send({
      ...product,
      price: req.body.price,
      description: req.body.description,
    });
  },
);

export { router as updateProductRouter };
