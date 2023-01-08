import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { TextField } from '@core/components/text-field';
import { Password } from '@core/components/password';
import { useSignUpMutation } from '@core/api/api-authorization';
import { styles } from '../authorization.styles';
import { validateSignUpSchema } from './sign-up.services';

export interface FormValues {
  name: string;
  email: string;
  password: string;
  repeatedPassword: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const methods = useForm<FormValues>({ resolver: validateSignUpSchema });
  const { mutate } = useSignUpMutation();

  const onSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess() {
        Notify.success('Success');
        navigate('/');
      },
      onError({ message }) {
        Notify.failure(message);
      },
    });
  };

  return (
    <>
      <Typography variant="h5" css={styles.title}>
        Sign Up
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.form}>
          <TextField name="name" label="Name" />
          <TextField name="email" label="Email" />
          <Password name="password" label="Password" />
          <Password name="repeatedPassword" label="Repeated password" />
          <Button size="large" type="submit">
            Sign Up
          </Button>
        </form>
      </FormProvider>
      <div css={styles.links}>
        <Link to="/">Already have an account? Sign in</Link>
      </div>
    </>
  );
};
