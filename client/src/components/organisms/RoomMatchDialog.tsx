import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  LinearProgress,
  Typography,
} from '@mui/material';
import RoomMatchDialogEntering from 'components/molecules/RoomMatchDialogEntering';
import RoomMatchDialogError from 'components/molecules/RoomMatchDialogError';
import RoomMatchDialogGuestNaming from 'components/molecules/RoomMatchDialogGuestNaming';
import RoomMatchDialogKickAsking from 'components/molecules/RoomMatchDialogKickAsking';
import RoomMatchDialogModeSelecting from 'components/molecules/RoomMatchDialogModeSelecting';
import RoomMatchDialogWaiting from 'components/molecules/RoomMatchDialogWaiting';
import { FC, useState } from 'react';
import { GameCode, gameCodeList, UserStatus } from '../../common/commonConst';

type Props = {
  matchStatus:
    | 'modeSelecting' // 部屋作成または部屋に入室を選択する
    | 'guestNaming' // ゲストプレイヤーの場合、プレイヤー名を入力する
    | 'waiting' // 部屋作成後の待機画面
    | 'entering' // 部屋入室処理中の待機画面
    | 'kickAsking' // 入室者があった場合の追い出しor入室許可を尋ねられる画面
    | 'error'; // 問題発生時の画面
  gameCode: GameCode;
  connecting: boolean;
};

const userStatusList: UserStatus[] = [
  {
    userName: 'ゲスト',
    type: 'guest',
    lv: null,
  },
  {
    userName: 'はるき彦丸',
    type: 'player',
    lv: 38,
  },
];

const RoomMatchDialog: FC<Props> = ({ matchStatus, gameCode, connecting }) => {
  const [num, setNum] = useState(0);

  return (
    <Dialog open fullWidth maxWidth="md">
      <Fade in={connecting}>
        <LinearProgress />
      </Fade>
      <DialogTitle fontSize={75} textAlign="center" paddingBottom={5}>
        {gameCodeList[gameCode].jp} ルームマッチ
      </DialogTitle>
      <DialogContent>
        {/* 状態によって表示が異なる箇所 */}
        {matchStatus === 'guestNaming' && <RoomMatchDialogGuestNaming />}
        {matchStatus === 'modeSelecting' && <RoomMatchDialogModeSelecting />}
        {matchStatus === 'waiting' && (
          <RoomMatchDialogWaiting roomNumber="7643" connecting={connecting} />
        )}
        {matchStatus === 'entering' && (
          <RoomMatchDialogEntering roomNumber="5585" />
        )}
        {matchStatus === 'kickAsking' && (
          <RoomMatchDialogKickAsking enemyStatus={userStatusList[num]} />
        )}
        {matchStatus === 'error' && (
          <RoomMatchDialogError
            errorText="入室できませんでした。"
            gameCode={gameCode}
          />
        )}
        {/* 状態によって表示が異なる箇所ここまで */}
      </DialogContent>
      <DialogActions>
        <Button sx={{ marginRight: 'auto' }} onClick={() => setNum(1 - num)}>
          <Typography fontSize={20}>キャンセル</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RoomMatchDialog;
