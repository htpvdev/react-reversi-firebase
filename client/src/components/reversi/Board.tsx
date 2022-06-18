import React, { useState } from "react"
import './Board.scss'
import { Field, FieldKey, Setting, Side } from '../common/reversiTypes';
import { firstField } from '../common/reversiConst';
import { ReversiAction } from "../../actions/reversiAction";
import Piece from "./Piece";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface BoardProps {
  setting: Setting,
  setSetting: (setting: Setting) => void
}

const Board: React.FC<BoardProps> = ({ setting, setSetting }) => {

  const [field, setField] = useState<Field>(firstField)

  const pieceRowList: Array<JSX.Element> = []
  let pieceRow: Array<JSX.Element> = []

  const action = new ReversiAction()

  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    alertMessage: '',
  });

  const { vertical, horizontal, open, alertMessage } = snackBarState;

  const putPieceAction = (field: Field, side: Side, y: number, x: number) => {
    const fieldInfo = action.putPiece(field, side, y, x)
    if (fieldInfo.turnedPieceCount === 0) {
      setSnackBarState({ ...snackBarState, open: true, alertMessage: 'ここにはおけません' });
    } else {
      let { player } = setting
      player!=='black'? player = 'black': player = 'white'

      const {black, white} = setting
      const pieceCount = action.countPieces(fieldInfo.field)
      black.piece = pieceCount.black
      white.piece = pieceCount.white

      setSetting({...setting, player, black, white})
      setField(fieldInfo.field);
    }
  }

  let key!: FieldKey

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      key = 'p' + y + x as FieldKey
      pieceRow.push(
        <Piece
          onClick={() => {
            putPieceAction({ ...field }, setting.player, y, x)
          }}
          side={field[key]}
          key={key}
        />
      )
    }

    pieceRowList.push(<tr key={y}>{pieceRow}</tr>)
    pieceRow = []
  }

  return (
    <>
      <table>
        <tbody>
          {pieceRowList}
        </tbody>
      </table>

      <Snackbar
        anchorOrigin={{ vertical, horizontal } as SnackbarOrigin}
        open={open}
        onClose={() => setSnackBarState({ ...snackBarState, open: false})}
        message={alertMessage}
        key={vertical + horizontal}
      />
    </>
  )
}

export default Board