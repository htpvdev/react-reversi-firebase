import { Field, Setting } from "./reversiTypes"

export const firstField: Field = {
  p00 : 'none', p01 : 'none', p02 : 'none', p03 : 'none', p04 : 'none', p05 : 'none', p06 : 'none', p07 : 'none',
  p10 : 'none', p11 : 'none', p12 : 'none', p13 : 'none', p14 : 'none', p15 : 'none', p16 : 'none', p17 : 'none',
  p20 : 'none', p21 : 'none', p22 : 'none', p23 : 'none', p24 : 'none', p25 : 'none', p26 : 'none', p27 : 'none',
  p30 : 'none', p31 : 'none', p32 : 'none', p33 : 'black', p34 : 'white', p35 : 'none', p36 : 'none', p37 : 'none',
  p40 : 'none', p41 : 'none', p42 : 'none', p43 : 'white', p44 : 'black', p45 : 'none', p46 : 'none', p47 : 'none',
  p50 : 'none', p51 : 'none', p52 : 'none', p53 : 'none', p54 : 'none', p55 : 'none', p56 : 'none', p57 : 'none',
  p60 : 'none', p61 : 'none', p62 : 'none', p63 : 'none', p64 : 'none', p65 : 'none', p66 : 'none', p67 : 'none',
  p70 : 'none', p71 : 'none', p72 : 'none', p73 : 'none', p74 : 'none', p75 : 'none', p76 : 'none', p77 : 'none',
}


export const firstSetting: Setting = {
  player: 'black',
  status: 'boot',
  black: { type: 'player', playerName: 'プレイヤー1', piece: 2 },
  white: { type: 'player', playerName: 'プレイヤー2', piece: 2 },
}

export const sideText = {
  black: '黒',
  white: '白',
}