import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../entity';
import { validateRequest, signupValidator, generateToken } from '../../common';

const router = express.Router();

router.post(
  '/users/signup',
  signupValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const userRepo = getRepository(User);
    const {
      id,
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      photo,
    } = req.body;

    const token = generateToken(id);

    const user = userRepo.create({
      id,
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      photo,
    });

    await userRepo.save(user);

    res.status(201).send({
      token,
      data: {
        user,
      },
    });
  },
);

export { router as signupRouter };
