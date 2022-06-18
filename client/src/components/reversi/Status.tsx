import React from "react"
import { sideText } from "../common/reversiConst";
import { Setting } from '../common/reversiTypes';

const Status: React.FC<{setting: Setting}> = ({setting}) => {

  return (
    <div>
      <li>{`${setting[setting.player].playerName} (${sideText[setting.player]})のターン`}</li>
      <li>{`${sideText.black} : ${setting.black.piece}枚`}</li>
      <li>{`${sideText.white} : ${setting.white.piece}枚`}</li>
    </div>
  )
}

export default Status