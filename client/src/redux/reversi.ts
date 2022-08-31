import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PieceSide, UserStatus } from 'common/commonConst';

export type GameStatus = 'selectGame' | 'startDialog' | 'playing' | 'result';
export type GameMode = 'room' | 'rank' | 'casual' | 'cpu' | null;

export type DialogStatus =
  | 'guestNaming' // ゲストプレイヤーの場合、プレイヤー名を入力する
  | 'modeSelecting' // 部屋作成または部屋に入室を選択する
  | 'waiting' // 部屋作成後の待機画面
  | 'entering' // 部屋入室処理中の待機画面
  | 'kickAsking' // 入室者があった場合の追い出しor入室許可を尋ねられる画面
  | 'error'; // 問題発生時の画面

export type ReversiState = {
  gameStatus: GameStatus;
  gameMode: GameMode | null;
  dialogStatus: DialogStatus;
  field: PieceSide[][];
  roomNumber: string | null;
  userStatus: UserStatus | null;
  enemyStatus: UserStatus | null;
  timeLeft: number | null;
  isMyturn: boolean;
};
const initialState: ReversiState = {
  gameStatus: 'selectGame',
  gameMode: null,
  dialogStatus: 'guestNaming',
  field: [],
  roomNumber: null,
  userStatus: null,
  enemyStatus: null,
  timeLeft: null,
  isMyturn: false,
};

export const reversiSlice = createSlice({
  name: 'reversi',
  initialState,
  reducers: {
    resetGame: () => ({
      ...initialState,
    }),
    selectGameMode: (state, action: PayloadAction<GameMode>) => ({
      ...state,
      gameMode: action.payload,
      gameStatus: 'startDialog',
    }),
    setRoomNumber: (state, action: PayloadAction<string | null>) => ({
      ...state,
      roomNumber: action.payload,
    }),
    setDialogStatus: (state, action: PayloadAction<DialogStatus>) => ({
      ...state,
      dialogStatus: action.payload,
    }),
    kickAsking: (state, action: PayloadAction<UserStatus>) => ({
      ...state,
      enemyStatus: action.payload,
      dialogStatus: 'kickAsking',
    }),
    setGuestName: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => ({
      ...state,
      userStatus: {
        userName: action?.payload ?? 'ゲスト',
        type: 'guest',
        lv: null,
      },
      dialogStatus: 'modeSelecting',
    }),
    acceptNewComer: (state) => ({
      ...state,
      gameStatus: 'playing',
    }),
    kickNewComer: (state) => ({
      ...state,
      enemyStatus: null,
      dialogStatus: 'waiting',
    }),
  },
});
