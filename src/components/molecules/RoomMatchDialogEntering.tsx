import { Box, TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { LoadingButton } from '@mui/lab';
import InputIcon from '@mui/icons-material/Input';
import { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { UserStatus } from 'common/commonConst';

type Props = {
  getSocket: () => Socket;
};

const RoomMatchDialogEntering: FC<Props> = ({ getSocket }) => {
  const userStatus = useSelector<RootState, UserStatus | null>(
    (state) => state.reversi.userStatus,
  );
  const [changed, setChanged] = useState(false);
  const [kicked, setKicked] = useState(false);
  const [roomNumber, setRoomNumber] = useState<string | null>(null);

  const enterRoom = () => {
    setChanged(true);
    getSocket().emit('applyJoinRoom', roomNumber, userStatus);
    console.log(roomNumber);
  };

  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomNumber(e.target.value);
    if (changed) getSocket().emit('quitRoom');
    setChanged(false);
  };

  useEffect(() => {
    getSocket().on('kickedRoom', () => {
      console.log('kickedddddddddddd!!!!!!!!!');
      setKicked(true);
      setRoomNumber(null);
      setChanged(false);
    });
  }, []);

  return (
    <>
      {kicked && (
        <DialogContentText fontSize={30} py={3}>
          対戦相手に入室を拒否されました。
        </DialogContentText>
      )}
      <DialogContentText fontSize={30} py={3}>
        ※対戦相手から聞いた部屋番号を入力してください
      </DialogContentText>
      <Box display="flex" py={5}>
        <DialogContentText fontSize={40}>部屋番号：</DialogContentText>
        <TextField color="warning" onChange={onChangeTextField} />
        <LoadingButton
          loading={changed}
          loadingPosition="start"
          startIcon={<InputIcon />}
          variant="contained"
          color="warning"
          sx={{ py: 0, mx: 2, fontSize: 20 }}
          onClick={() => enterRoom()}
        >
          入室する
        </LoadingButton>
      </Box>
    </>
  );
};
export default RoomMatchDialogEntering;
