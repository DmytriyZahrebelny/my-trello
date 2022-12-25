import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { TextField } from '@core/components/text-field';
import { Password } from '@core/components/password';
import { styles } from '../authorization.styles';

export const SignUp = () => {
  const methods = useForm({ defaultValues: { name: '', email: '', password: '' } });

  return (
    <>
      <Typography variant="h5" css={styles.title}>
        Sign Up
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((values: unknown) => values)} css={styles.form}>
          <TextField name="name" label="Name" />
          <TextField name="email" label="Email" />
          <Password name="password" label="Password" />
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
