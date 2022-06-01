import React, { useState } from "react"
import './Board.scss'
import { Field, FieldKey, Side } from "../common/reversiTypes"
import { firstField } from '../common/reversiConst';
import { ReversiAction } from "../../actions/reversiAction";

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

  let putPiece! : () => void

{/* <Piece onClick={(setField,field, y, x) => putPieceAction(field, y, x)} side={field['p'+y+x as FieldKey]} key={'p'+y+x} /> */}
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      putPiece = () => {
        setField(putPieceAction({ ...field }, side, y, x))
      }
      pieceRow.push(
        <td onClick={putPiece} key={'p'+y+x}>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <circle
                className={field['p'+y+x as FieldKey]}
                r="20"
                cx="25"
                cy="25"
              ></circle>
            </svg>
          </div>
        </td>
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

