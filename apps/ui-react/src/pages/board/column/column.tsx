import { styles } from './column.styles';

interface Props {
  name: string;
}

export const Column = ({ name }: Props) => {
  return (
    <li css={styles.column}>
      <div>{name}</div>
    </li>
  );
};
