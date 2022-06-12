import React, { useState } from 'react';
import Board from "./Board"
import Status from "./Status"
import { firstSetting } from '../common/reversiConst';
import StartDialog from './StartDialog';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Reversi() {

  const [setting, setSetting] = useState(firstSetting);

  return (
    <>
      {setting.status === 'boot' ? (<StartDialog />) : null}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        >TOPへ戻る</Button>
      <Status setting={setting} />
      <Board setting={setting} setSetting={setSetting} />
    </>
  )
}