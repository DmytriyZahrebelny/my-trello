import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { HTTP_CODE } from '../constants/common';
import { UserService } from './user.service';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[^0-9$&+,:;=?@#|'<>.^*()%!]+$/)
    .required()
    .typeError('Name is required'),
  email: yup.string().email().typeError('2'),
  password: yup.string().min(6).required().typeError('Password is required'),
  repeatedPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const userValidator = (service: UserService) => async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const isValid = await schema.isValid(newUser, { abortEarly: false });

  if (!isValid) {
    return res.status(HTTP_CODE.BAD_REQUEST).send({ message: 'Incorrect values' });
  }

  const userByEmail = await service.findByEmail(req.body.email);

  if (userByEmail) {
    return res.status(HTTP_CODE.BAD_REQUEST).send({ message: 'Email already exists' });
  }

  return next();
};
