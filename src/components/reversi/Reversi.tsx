import React from "react"
import Board from "./Board"
import Status from "./Status"
import { firstField, firstSetting } from '../common/reversiConst';
import { Field, Setting } from '../common/reversiTypes';

export default class Reversi extends React.Component {
  private field: Field
  private setting: Setting

  constructor(props: any) {
    super(props)
    this.field = firstField
    this.setting = firstSetting
  }

  render() {
    return (
      <>
        <Status setting={this.setting} />
        <Board field={this.field} />
      </>
    )
  }
}