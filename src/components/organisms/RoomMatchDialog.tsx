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
import { FC } from 'react';
import { Socket } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { DialogStatus, reversiSlice } from 'redux/reversi';
import { GameCode, gameCodeList, UserStatus } from '../../common/commonConst';

type Props = {
  gameCode: GameCode;
  connecting: boolean;
  roomNumber: string | null;
  getSocket: () => Socket;
};

// const userStatusList: UserStatus[] = [
//   {
//     userName: 'ゲスト',
//     type: 'guest',
//     lv: null,
//   },
//   {
//     userName: 'はるき彦丸',
//     type: 'player',
//     lv: 38,
//   },
// ];

const RoomMatchDialog: FC<Props> = ({
  gameCode,
  roomNumber,
  connecting,
  getSocket,
}) => {
  const enemyStatus = useSelector<RootState, UserStatus | null>(
    (state) => state.reversi.enemyStatus,
  );
  const dialogStatus = useSelector<RootState, DialogStatus>(
    (state) => state.reversi.dialogStatus,
  );
  const dispatch = useDispatch();
  const { resetGame } = reversiSlice.actions;

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
        {dialogStatus === 'guestNaming' && <RoomMatchDialogGuestNaming />}
        {dialogStatus === 'modeSelecting' && <RoomMatchDialogModeSelecting />}
        {dialogStatus === 'waiting' && (
          <RoomMatchDialogWaiting {...{ roomNumber, connecting, getSocket }} />
        )}
        {dialogStatus === 'entering' && (
          <RoomMatchDialogEntering {...{ getSocket }} />
        )}
        {dialogStatus === 'kickAsking' && (
          <RoomMatchDialogKickAsking {...{ enemyStatus, getSocket }} />
        )}
        {dialogStatus === 'error' && (
          <RoomMatchDialogError
            errorText="入室できませんでした。"
            gameCode={gameCode}
          />
        )}
        {/* 状態によって表示が異なる箇所ここまで */}
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ marginRight: 'auto' }}
          onClick={() => dispatch(resetGame())}
        >
          <Typography fontSize={20}>キャンセル</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RoomMatchDialog;
