import React, { useContext, useEffect, useState } from 'react';
import Board from "./Board"
import Status from "./Status"
import { firstField, firstSetting } from '../common/reversiConst';
import StartDialog from './StartDialog';
import { Field } from '../common/reversiTypes';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useField } from '../../hooks/useField';
import { useSetting } from '../../hooks/useSetting';
import { ReversiContext } from '../../contexts/reversiContexts';

export default function Reversi() {

  //#region
  // const [field, setField] =useState(firstField)
  // const [setting, setSetting] = useState(firstSetting)
  // const testField: Field = [
  //   [
  //     { side: 'black', point: 0},
  //     { side: 'white', point: 1},
  //     { side: 'black', point: 2},
  //     { side: 'white', point: 3},
  //     { side: 'black', point: 4},
  //     { side: 'none', point: 5},
  //     { side: 'none', point: 6},
  //     { side: 'none', point: 7},
  //   ],
  //   [
  //     { side: 'none', point: 8},
  //     { side: 'none', point: 9},
  //     { side: 'none', point: 10},
  //     { side: 'none', point: 11},
  //     { side: 'none', point: 12},
  //     { side: 'none', point: 13},
  //     { side: 'none', point: 14},
  //     { side: 'none', point: 15},
  //   ],
  //   [
  //     { side: 'none', point: 16},
  //     { side: 'none', point: 17},
  //     { side: 'none', point: 18},
  //     { side: 'none', point: 19},
  //     { side: 'none', point: 20},
  //     { side: 'none', point: 21},
  //     { side: 'none', point: 22},
  //     { side: 'none', point: 23},
  //   ],
  //   [
  //     { side: 'none', point: 24},
  //     { side: 'none', point: 25},
  //     { side: 'none', point: 26},
  //     { side: 'black', point: 27},
  //     { side: 'white', point: 28},
  //     { side: 'none', point: 29},
  //     { side: 'none', point: 30},
  //     { side: 'none', point: 31},
  //   ],
  //   [
  //     { side: 'none', point: 32},
  //     { side: 'none', point: 33},
  //     { side: 'none', point: 34},
  //     { side: 'white', point: 35},
  //     { side: 'black', point: 36},
  //     { side: 'none', point: 37},
  //     { side: 'none', point: 38},
  //     { side: 'none', point: 39},
  //   ],
  //   [
  //     { side: 'none', point: 40},
  //     { side: 'none', point: 41},
  //     { side: 'none', point: 42},
  //     { side: 'none', point: 43},
  //     { side: 'none', point: 44},
  //     { side: 'none', point: 45},
  //     { side: 'none', point: 46},
  //     { side: 'none', point: 47},
  //   ],
  //   [
  //     { side: 'none', point: 48},
  //     { side: 'none', point: 49},
  //     { side: 'none', point: 50},
  //     { side: 'none', point: 51},
  //     { side: 'none', point: 52},
  //     { side: 'none', point: 53},
  //     { side: 'none', point: 54},
  //     { side: 'none', point: 55},
  //   ],
  //   [
  //     { side: 'none', point: 56},
  //     { side: 'none', point: 57},
  //     { side: 'none', point: 58},
  //     { side: 'none', point: 59},
  //     { side: 'none', point: 60},
  //     { side: 'none', point: 61},
  //     { side: 'none', point: 62},
  //     { side: 'none', point: 63},
  //   ],
  // ]

  // const field = useField()
  // const setting = useSetting()
  //#endregion

  const [revesiContext, setReversiContext] = useState({
    setting: firstSetting,
    field: firstField,
  })

  console.log('revesiContext is:', revesiContext)

  return (
    <ReversiContext.Provider value={revesiContext}>
      {revesiContext.setting.status === 'boot' ? (<StartDialog />) : null}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        >TOPへ戻る</Button>
      <Status setting={revesiContext.setting} />
      <Board />
    </ReversiContext.Provider>
  )
}