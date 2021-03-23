import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import createError from 'http-errors';

import { User } from '../../entity';
import { signinValidator, validateRequest, generateToken } from '../../common';

const router = express.Router();

router.post(
  '/users/signin',
  signinValidator,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getRepository(User).findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new createError.Unauthorized(
        `Can't find user with a given credentials.`,
      );

    const token = generateToken(user.id);

    res.status(200).send({
      token,
    });
  },
);

export { router as signinRouter };
