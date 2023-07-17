import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const validateSignInSchema = yupResolver(
  yup.object().shape({
    email: yup.string().required('email field is required').email('email must be a valid email'),
    password: yup.string().required('password is required').min(8),
  }),
);
