import { useForm, FormProvider } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { TextField } from '@components/text-field';
import { useCreateWorkSpaceMutation } from '@api/api-work-spaces';
import { CreateWorkspaceParams } from '@api/api.types';
import { client } from '@providers/query-provider';
import { QUERY_KEYS } from '@constants/query-keys';
import { validateCreateWorkspaceSchema } from './workspace-creation-form.services';
import { styles } from './workspace-creation-form.styles';

interface Props {
  onClose: () => void;
}

export const WorkspaceCreationForm = ({ onClose }: Props) => {
  const methods = useForm<CreateWorkspaceParams>({ resolver: validateCreateWorkspaceSchema });
  const { mutate: createWorkspace } = useCreateWorkSpaceMutation();

  const handleFormSubmit = (values: CreateWorkspaceParams) => {
    createWorkspace(values, {
      async onSuccess() {
        onClose();
        Notify.success('Workspace was created successfully');
        await client.invalidateQueries([QUERY_KEYS.workSpaces], { exact: true });
      },
      onError({ message }) {
        Notify.failure(message);
      },
    });
  };

  return (
    <>
      <Typography css={styles.title} variant="h5">
        Create Workspace
      </Typography>
      <FormProvider {...methods}>
        <form css={styles.form} onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <TextField name="name" label="Name" styles={styles.field} />
          <Button type="submit">Crate</Button>
        </form>
      </FormProvider>
    </>
  );
};
