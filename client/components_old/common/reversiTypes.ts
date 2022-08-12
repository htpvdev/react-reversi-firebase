/**  */
export type Side = 'black' | 'white';

/**  */
export type PieceSide = Side | 'none';

/**  */
export type Status = 'boot' | 'playing' | 'overed';

/**  */
export type PlayerType = 'player' | 'cpu';

/**  */
export type Setting = {
  player: Side;
  status: Status;
  black: { type: PlayerType; playerName: string; piece: number };
  white: { type: PlayerType; playerName: string; piece: number };
};

/**  */
export type Field = {
  p00: PieceSide;
  p01: PieceSide;
  p02: PieceSide;
  p03: PieceSide;
  p04: PieceSide;
  p05: PieceSide;
  p06: PieceSide;
  p07: PieceSide;
  p10: PieceSide;
  p11: PieceSide;
  p12: PieceSide;
  p13: PieceSide;
  p14: PieceSide;
  p15: PieceSide;
  p16: PieceSide;
  p17: PieceSide;
  p20: PieceSide;
  p21: PieceSide;
  p22: PieceSide;
  p23: PieceSide;
  p24: PieceSide;
  p25: PieceSide;
  p26: PieceSide;
  p27: PieceSide;
  p30: PieceSide;
  p31: PieceSide;
  p32: PieceSide;
  p33: PieceSide;
  p34: PieceSide;
  p35: PieceSide;
  p36: PieceSide;
  p37: PieceSide;
  p40: PieceSide;
  p41: PieceSide;
  p42: PieceSide;
  p43: PieceSide;
  p44: PieceSide;
  p45: PieceSide;
  p46: PieceSide;
  p47: PieceSide;
  p50: PieceSide;
  p51: PieceSide;
  p52: PieceSide;
  p53: PieceSide;
  p54: PieceSide;
  p55: PieceSide;
  p56: PieceSide;
  p57: PieceSide;
  p60: PieceSide;
  p61: PieceSide;
  p62: PieceSide;
  p63: PieceSide;
  p64: PieceSide;
  p65: PieceSide;
  p66: PieceSide;
  p67: PieceSide;
  p70: PieceSide;
  p71: PieceSide;
  p72: PieceSide;
  p73: PieceSide;
  p74: PieceSide;
  p75: PieceSide;
  p76: PieceSide;
  p77: PieceSide;
};

export type FieldKey =
  | 'p00'
  | 'p01'
  | 'p02'
  | 'p03'
  | 'p04'
  | 'p05'
  | 'p06'
  | 'p07'
  | 'p10'
  | 'p11'
  | 'p12'
  | 'p13'
  | 'p14'
  | 'p15'
  | 'p16'
  | 'p17'
  | 'p20'
  | 'p21'
  | 'p22'
  | 'p23'
  | 'p24'
  | 'p25'
  | 'p26'
  | 'p27'
  | 'p30'
  | 'p31'
  | 'p32'
  | 'p33'
  | 'p34'
  | 'p35'
  | 'p36'
  | 'p37'
  | 'p40'
  | 'p41'
  | 'p42'
  | 'p43'
  | 'p44'
  | 'p45'
  | 'p46'
  | 'p47'
  | 'p50'
  | 'p51'
  | 'p52'
  | 'p53'
  | 'p54'
  | 'p55'
  | 'p56'
  | 'p57'
  | 'p60'
  | 'p61'
  | 'p62'
  | 'p63'
  | 'p64'
  | 'p65'
  | 'p66'
  | 'p67'
  | 'p70'
  | 'p71'
  | 'p72'
  | 'p73'
  | 'p74'
  | 'p75'
  | 'p76'
  | 'p77';

/**  */
export type ReversiType = {
  setting: Setting;
  field: Field;
};

/**  */
export type PieceInfo = {
  black: number;
  white: number;
  none: number;
};

/** */
export type FieldInfo = {
  field: Field;
  turnedPieceCount: number;
};

/** */
export type PieceCount = {
  black: number;
  white: number;
};
