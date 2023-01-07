import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const validateSignUpSchema = yupResolver(
  yup.object().shape({
    name: yup.string().required('name is required').max(80, 'name should have no more than 80 characters'),
    email: yup.string().required('email field is required').email('email must be a valid email'),
    password: yup.string().required('password is required').min(8),
    repeatedPassword: yup
      .string()
      .required('Repeated password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
);
