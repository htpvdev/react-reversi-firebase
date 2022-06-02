import React from "react"
import { FieldKey } from "../common/reversiTypes"
import './Piece.scss'

interface PieceProps {
  onClick: () => void,
  side: 'black'|'white'|'none',
  key: FieldKey
}

export default function Piece(props: PieceProps) {

  return (
    <td onClick={props.onClick}>
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <circle
            className={props.side}
            r="20"
            cx="25"
            cy="25"
          ></circle>
        </svg>
      </div>
    </td>
  )
}