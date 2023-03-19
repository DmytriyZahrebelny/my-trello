import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { styles } from './workspaces-list-item.styles';

interface Props {
  id: number;
  name: string;
}

export const WorkspaceListItem = ({ id, name }: Props) => {
  return (
    <Link css={styles.container} to={String(id)}>
      <Typography variant="h6">{name}</Typography>
    </Link>
  );
};
