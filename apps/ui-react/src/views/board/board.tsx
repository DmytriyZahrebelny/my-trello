import { BoardGrid } from './board-grid';
import { styles } from './board.styles';

export const Board = () => {
  return (
    <div css={styles.container}>
      <BoardGrid />
    </div>
  );
};
