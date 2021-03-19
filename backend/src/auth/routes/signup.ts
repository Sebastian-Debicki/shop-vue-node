import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { getRepository } from 'typeorm';

import { User } from '../../entity';
import { validateRequest, signupValidator } from '../../common';

const router = express.Router();

router.post(
  '/users/signup',
  signupValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const userRepo = getRepository(User);
    const { id, email, password, confirmPassword, photo } = req.body;

    const user = userRepo.create({
      id,
      email,
      password,
      confirmPassword,
      photo,
    });

    await userRepo.save(user);

    res.status(201).send(user);
  },
);

export { router as signupRouter };
