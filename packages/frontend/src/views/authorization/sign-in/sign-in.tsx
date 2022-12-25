import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { TextField } from '@core/components/text-field';
import { Password } from '@core/components/password';
import { ROUTES } from '@core/constants';
import { styles } from '../authorization.styles';

export const SignIn = () => {
  const methods = useForm({ defaultValues: { email: '', password: '' } });

  return (
    <>
      <Typography variant="h5" css={styles.title}>
        Sign In
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((values: unknown) => values)} css={styles.form}>
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
