/* eslint-disable react/no-array-index-key */
import { Box } from '@mui/material';
import { PieceSide } from 'common/commonConst';
import ReversiPiece from 'components/atoms/ReversiPiece';
import { FC } from 'react';
import './ReversiBoard.css';

const ReversiBoard: FC<{ field: PieceSide[][] }> = ({ field }) => (
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

export default ReversiBoard;
