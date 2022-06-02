import React, { useState } from "react"
import './Board.scss'
import { Field, FieldKey, Side } from '../common/reversiTypes';
import { firstField } from '../common/reversiConst';
import { ReversiAction } from "../../actions/reversiAction";
import Piece from "./Piece";

export default function Board(): JSX.Element {

  const [field, setField] = useState<Field>(firstField)
  const [side, setSide] = useState<Side>('black')

  const pieceRowList: Array<JSX.Element> = []
  let pieceRow: Array<JSX.Element> = []

  const action = new ReversiAction()

  const putPieceAction = (field: Field, side: Side, y: number, x: number) => {
    console.log(field, y, x)
    const fieldInfo = action.putPiece(field, side, y, x)
    if (fieldInfo.turnedPieceCount === 0) {
      alert('ここにはおけません')
    } else {
      setSide(side!=='black'? 'black':'white')
    }
    return fieldInfo.field
  }

  let key!: FieldKey

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      key = 'p' + y + x as FieldKey
      pieceRow.push(
        <Piece
          onClick={() => {
            setField(putPieceAction({ ...field }, side, y, x))
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
    <table>
      <tbody>
        {pieceRowList}
      </tbody>
    </table>
  )
}

