import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { TextField } from '@core/components/text-field';
import { Password } from '@core/components/password';
import { useSignUpMutation } from '@core/api/api-authorization';
import { styles } from '../authorization.styles';

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const methods = useForm<RegisterParams>({ defaultValues: { name: '', email: '', password: '' } });
  const { mutate } = useSignUpMutation();

  const onSubmit = (values: RegisterParams) => {
    console.log(values);
    mutate(values, {
      onSuccess(data) {
        console.log(data);
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
