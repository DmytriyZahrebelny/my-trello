import { Modal as MUIModal } from '@mui/material';
import type { ReactNode } from 'react';

import { styles } from './modal.styles';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: Props) => (
  <MUIModal css={styles.container} open={open} onClose={onClose}>
    <div css={styles.content}>{children}</div>
  </MUIModal>
);
