import { body } from 'express-validator';

export const orderValidator = [
  body('products').not().isEmpty().withMessage('Products are required.'),
];
