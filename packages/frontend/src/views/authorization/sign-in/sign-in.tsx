import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { TextField } from '@core/components/text-field';
import { Password } from '@core/components/password';
import { ROUTES } from '@core/constants';
import { useSignInMutation } from '@core/api/api-authorization';
import { setTokens } from '@core/services/auth-services';
import { styles } from '../authorization.styles';
import { validateSignInSchema } from './sign-in.helpers';

interface FormValues {
  password: string;
  email: string;
}

export const SignIn = () => {
  const methods = useForm<FormValues>({ resolver: validateSignInSchema });

  const { mutate } = useSignInMutation();

  const onSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess({ data: { accessToken, refreshToken, expiresIn } }) {
        setTokens({ accessToken, refreshToken, expiresIn });
      },
      onError({ message }) {
        Notify.failure(message);
      },
    });
  };

  return (
    <>
      <Typography variant="h5" css={styles.title}>
        Sign In
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.form}>
          <TextField name="email" label="Email" />
          <Password name="password" label="Password" />
          <Button size="large" type="submit">
            Sign In
          </Button>
        </form>
      </FormProvider>
      <div css={styles.links}>
        <Link to="#">
          <span>Forgot password?</span>
        </Link>
        <Link to={ROUTES.signUp}>Don&apos;t have an account? Sign Up</Link>
      </div>
    </>
  );
};
