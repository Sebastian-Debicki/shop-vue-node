import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Unauthorized } from 'http-errors';

import { productValidator, protectRoute, validateRequest } from '../../common';
import { Product } from '../../entity';

const router = express.Router();

router.post(
  '/api/products/:id',
  protectRoute,
  productValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, price, promotion, description } = req.body;

    const productRepo = getRepository(Product);

    const product = await productRepo.findOne({ where: { id: req.params.id } });

    if (req.currentUser?.id !== product?.userId)
      throw new Unauthorized(
        `Sorry, you can't update product that is not belong to you.`,
      );

    const updatedProduct = await productRepo.save({
      ...product,
      name,
      price,
      promotion,
      description,
    });

    res.status(201).send({
      data: {
        product: updatedProduct,
      },
    });
  },
);

export { router as updateProductRouter };
