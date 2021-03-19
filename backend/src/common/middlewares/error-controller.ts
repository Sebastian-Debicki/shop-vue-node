import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export const errorController = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.statusCode || 500).json({
    message: err.message,
  });
};
