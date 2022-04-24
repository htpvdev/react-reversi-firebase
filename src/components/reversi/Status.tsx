import React from "react"
import { Setting } from "../common/reversiTypes"

export default function Status(props: {setting: Setting}) {

  return (
    <div>
      {props.setting.player}
    </div>
  )
}
