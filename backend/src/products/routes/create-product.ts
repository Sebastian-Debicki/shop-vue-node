import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { body } from 'express-validator';

import { Product } from '../../entity';
import { validateRequest } from '../../common';

const router = express.Router();

router.post(
  '/api/products',
  [
    body('price').not().isEmpty().withMessage('Price is required'),
    body('description').not().isEmpty().withMessage('Description is required'),
  ],

  validateRequest,
  async (req: Request, res: Response) => {
    const productRepo = getRepository(Product);

    const product = productRepo.create({
      price: req.body.price,
      description: req.body.description,
    });

    await productRepo.save(product);

    res.status(201).send(product);
  },
);

export { router as createProductRouter };
