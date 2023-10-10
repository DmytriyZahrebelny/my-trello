import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('name is required').max(80, 'name should have no more than 80 characters'),
});

// @ts-ignore
export const validateCreateWorkspaceSchema = yupResolver(schema);
