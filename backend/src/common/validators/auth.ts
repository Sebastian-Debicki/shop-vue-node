import { body } from 'express-validator';

const email = [
  body('email')
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address.'),
];

const password = [
  body('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6, max: 30 })
    .withMessage('Password length must be beetwen 6-30.'),
];

export const signupValidator = [
  ...email,
  ...password,
  body('passwordConfirm')
    .not()
    .isEmpty()
    .withMessage('Password confirmation is required')
    .isLength({ min: 6, max: 30 })
    .withMessage('Password length must be beetwen 6-30.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must be equals');
      } else {
        return value;
      }
    }),
];
