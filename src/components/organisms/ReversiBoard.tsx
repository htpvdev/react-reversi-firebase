/* eslint-disable react/no-array-index-key */
import { Box } from '@mui/material';

import { PieceSide } from 'common/commonConst';
import ReversiPiece from 'components/atoms/ReversiPiece';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import './ReversiBoard.css';

const ReversiBoard: React.FC = () => {
  const field = useSelector<RootState, PieceSide[][]>(
    (state) => state.reversi.field,
  );

  return (
    <Box textAlign="center" p={5}>
      <table>
        <tbody>
          {field.map((pieceRow, rowIndex) => (
            <tr key={rowIndex}>
              {pieceRow.map((piece, index) => (
                <ReversiPiece key={`${rowIndex}:${index}`} piece={piece} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
export default ReversiBoard;
