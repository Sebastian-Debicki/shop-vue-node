import { body } from 'express-validator';

export const productValidator = [
  body('price').not().isEmpty().withMessage('Price is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
];
