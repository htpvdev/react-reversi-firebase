import React from "react"
import './Piece.scss'

interface PieceProps {
  side: 'black'|'white'|'none',
  y: number,
  x: number,
}

export default function Piece(props: PieceProps) {
  const putPiece = () => {
    console.log('waaaaaaaaaaaaaaaa')
  }

  return (
    <td onClick={() => putPiece()}>
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