import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { HTTP_CODE } from '../constants/common';
import { UserService } from './user.service';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').max(80, 'name should have no more than 80 characters'),
  email: yup.string().required('email is required').email(),
  password: yup.string().required('Password is required').min(8),
  repeatedPassword: yup
    .string()
    .required('Repeated password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const userValidator = (service: UserService) => async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;

  try {
    await schema.validate(newUser, { abortEarly: true });
  } catch (error) {
    const { message } = error as yup.ValidationError;

    return res.status(HTTP_CODE.BAD_REQUEST).send({ message });
  }

  const userByEmail = await service.findByEmail(req.body.email);

  if (userByEmail) {
    return res.status(HTTP_CODE.BAD_REQUEST).send({ message: 'Email already exists' });
  }

  return next();
};
