import { useCallback, useState } from 'react';
import { Grid } from '@mui/material';

import { Modal } from '@components/modal';
import { WorkspacesMenu } from './workspaces-menu';
import { WorkspacesList } from './workspaces-list';
import { WorkspaceCreationForm } from './workspace-creation-form';
import { styles } from './workspaces.styles';

export const Workspaces = () => {
  const [isModalOpen, setModal] = useState(false);

  const handleModalOpen = useCallback(() => {
    setModal(true);
  }, []);

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <Grid container css={styles.container}>
      <Grid xs={2.2} item>
        <WorkspacesMenu onModalOpen={handleModalOpen} />
      </Grid>
      <Grid xs={9.8} item>
        <WorkspacesList />
      </Grid>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <WorkspaceCreationForm onClose={handleModalClose} />
      </Modal>
    </Grid>
  );
};
