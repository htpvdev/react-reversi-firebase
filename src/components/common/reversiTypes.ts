/**  */
export type Side = 'black'|'white'

/**  */
export type PieceSide = Side|'none'

/**  */
export type Status = 'boot'|'playing'|'overed'

/**  */
export type PlayerType = 'player'|'cpu'

/**  */
export interface Setting {
  player: Side,
  status: Status,
  black: { type: PlayerType, playerName: string, piece: number },
  white: { type: PlayerType, playerName: string, piece: number },
}

/**  */
export type Field = Array<Array<{side: PieceSide, point: number}>>

/**  */
export interface ReversiType {
  setting: Setting,
  field: Field,
}

/**  */
export interface PieceInfo {
  black: number,
  white: number,
  none: number,
}

/** */
export interface CalcFieldInfo {
  calcField: Field,
  turnedPieceCount: number,
}
