import { useRef } from 'react';

import { Column } from './column';
import { styles } from './board.styles';

const columnList = [
  'column_1',
  'column_2',
  'column_3',
  'column_4',
  'column_5',
  'column_6',
  'column_7',
  'column_8',
  'column_9',
  'column_10',
];

export const Board = () => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <ul ref={ref} css={styles.list}>
      {columnList.map((name) => (
        <Column key={name} name={name} />
      ))}
    </ul>
  );
};
