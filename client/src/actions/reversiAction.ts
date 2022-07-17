import {
  Side,
  FieldInfo,
  Field,
  PieceSide,
  FieldKey,
  PieceCount,
} from '../components/common/reversiTypes';

export class ReversiAction {
  private vectors: Array<{ y: number; x: number }> = [
    { y: 1, x: 0 },
    { y: 1, x: 1 },
    { y: 0, x: 1 },
    { y: -1, x: 1 },
    { y: -1, x: 0 },
    { y: -1, x: -1 },
    { y: 0, x: -1 },
    { y: 1, x: -1 },
  ];

  public putPiece(
    field: Field,
    putSide: Side,
    y: number,
    x: number,
  ): FieldInfo {
    let turnedPieceCount = 0;
    if (field[(`p${  y  }${x}`) as FieldKey] !== 'none') {
      return { field, turnedPieceCount: 0 };
    }
    for (const vector of this.vectors) {
      // 各ベクトル(方向)ごとの処理
      /** 何個、敵サイドのピースが連続するかの変数 */
      let enemyPieceCount = 0;
      for (let vectorLength = 1; vectorLength < 8; vectorLength++) {
        if (
          y + vector.y * vectorLength >= 0 &&
          y + vector.y * vectorLength <= 7 &&
          x + vector.x * vectorLength >= 0 &&
          x + vector.x * vectorLength <= 7
        ) {
          const pieceSide: PieceSide =
            field[
              (`p${ 
                y + vector.y * vectorLength 
                }${x + vector.x * vectorLength}`) as FieldKey
            ];

          if (pieceSide === putSide) {
            enemyPieceCount = vectorLength - 1;
            break;
          } else if (pieceSide === 'none') {
            enemyPieceCount = 0;
            break;
          }
        }
      }
      if (enemyPieceCount > 0) {
        for (let v = 1; v <= enemyPieceCount; v++) {
          // ひっくり返す処理
          field[(`p${  y + vector.y * v  }${x + vector.x * v}`) as FieldKey] =
            putSide;
          turnedPieceCount += 1;
        }
      }
    }
    if (turnedPieceCount > 0) {
      // 一つでもピースをひっくり返していた場合のみ、ピースを置いた場所にピースを置く
      field[(`p${  y  }${x}`) as FieldKey] = putSide;
    }

    return { field, turnedPieceCount };
  }

  public countPieces(field: Field): PieceCount {
    const res: PieceCount = { black: 0, white: 0 };

    for (const key of Object.keys(field)) {
      if (field[key as FieldKey] === 'black') {
        res.black += 1;
      } else if (field[key as FieldKey] === 'white') {
        res.white += 1;
      }
    }

    return res;
  }
}
