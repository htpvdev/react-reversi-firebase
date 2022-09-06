import { PieceSide } from 'common/commonConst';
import { FC } from 'react';
import './ReversiPiece.css';

const ReversiPiece: FC<{ piece: PieceSide }> = ({ piece }) => (
  <td>
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle className={piece} r="40" cx="50" cy="50" />
      </svg>
    </div>
  </td>
);

export default ReversiPiece;
