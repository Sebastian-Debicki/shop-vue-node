import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw createError(400, { message: errors.array() });
  }

  next();
};
