import React from "react"
import Piece from "./Piece"
import './Board.scss'
import { Field } from "../common/reversiTypes"

export default function Board(props: {field: Field}): JSX.Element {

  const pieceRowList: Array<JSX.Element> = []
  let pieceRow: Array<JSX.Element> = []

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      pieceRow.push(<Piece side={props.field[y][x].side} y={y} x={x} />)
    }

    pieceRowList.push(<tr>{pieceRow}</tr>)
    pieceRow = []
  }

  return (
    <table>
      {pieceRowList}
    </table>
  )
}

