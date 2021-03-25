import { Request, Response, NextFunction } from 'express';
import { Unauthorized } from 'http-errors';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import { User } from '../../entity';

interface Decoded {
  id: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: Decoded;
    }
  }
}

export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token)
    throw new Unauthorized(
      'You are not logged in. Please log in to get access.',
    );

  const decoded = (await jwt.verify(token, process.env.JWT_SECRET!)) as Decoded;

  req.currentUser = decoded;

  const user = await getRepository(User).find({ id: decoded.id });
  if (!user)
    throw new Unauthorized('The user belonging to this token no longer exist.');

  next();
};
