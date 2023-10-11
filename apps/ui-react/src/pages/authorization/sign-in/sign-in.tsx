import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { TextField } from '@components/text-field';
import { Password } from '@components/password';
import { QUERY_KEYS } from '@constants/query-keys';
import { ROUTES } from '@constants/routes';
import { client } from '@providers/query-provider';
import { useSignInMutation } from '@api/api-authorization';
import { setTokens } from '@services/auth-services';
import { styles } from '../authorization.styles';
import { validateSignInSchema } from './sign-in.services';

interface FormValues {
  password: string;
  email: string;
}

export const SignIn = () => {
  const methods = useForm<FormValues>({ resolver: validateSignInSchema });

  const { mutate } = useSignInMutation();

  const onSubmit = (values: FormValues) => {
    mutate(values, {
      async onSuccess({ data }) {
        setTokens(data);
        await client.invalidateQueries([QUERY_KEYS.user], { exact: true });
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
          <TextField name="email" label="Email" styles={styles.field} />
          <Password name="password" label="Password" styles={styles.field} />
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
