import { FieldKey } from 'components/common/reversiTypes';
import 'components/reversi/Piece.css';

interface PieceProps {
  onClick: () => void;
  side: 'black' | 'white' | 'none';
  key: FieldKey;
}

const Piece: React.FC<PieceProps> = ({ side, onClick }) => (
  <td onClick={onClick}>
    <div>
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle className={side} r="20" cx="25" cy="25" />
      </svg>
    </div>
  </td>
);

export default Piece;
