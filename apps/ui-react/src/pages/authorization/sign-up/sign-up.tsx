import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { TextField } from 'src/components/text-field';
import { Password } from 'src/components/password';
import { useSignUpMutation } from '@api/api-authorization';
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
          <TextField name="name" label="Name" styles={styles.field} />
          <TextField name="email" label="Email" styles={styles.field} />
          <Password name="password" label="Password" styles={styles.field} />
          <Password name="repeatedPassword" label="Repeated password" styles={styles.field} />
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
