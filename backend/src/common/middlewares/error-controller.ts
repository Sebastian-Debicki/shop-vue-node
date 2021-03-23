import { Request, Response, NextFunction } from 'express';
import { HttpError, Unauthorized } from 'http-errors';

export const errorController = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.name === 'JsonWebTokenError')
    err.message = 'Invalid token. Please log in again.';
  if (err.name === 'TokenExpiredError')
    err.message = 'Your token has expired. Please log in again.';

  res.status(err.statusCode || 500).json({
    message: err.message || 'Sorry, something went wrong.',
  });
};
