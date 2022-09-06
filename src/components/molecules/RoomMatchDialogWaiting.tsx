import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { Socket } from 'socket.io-client';

type Props = {
  roomNumber: string | null;
  connecting: boolean;
  getSocket: () => Socket;
};

const buttonColorList = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
];

type ButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

const RoomMatchDialogWaiting: FC<Props> = ({
  roomNumber,
  connecting,
  getSocket,
}) => {
  const [roomNumberColor, setRoomNumberColor] = useState(
    buttonColorList[Math.floor(Math.random() * 6)],
  );

  useEffect(() => {
    getSocket().emit('createRoom');
  }, []);

  useEffect(() => {
    setRoomNumberColor(buttonColorList[Math.floor(Math.random() * 6)]);
  }, [roomNumber]);

  return (
    <>
      <Box display="flex">
        <DialogContentText fontSize={50}>部屋番号：</DialogContentText>
        <Button
          color={roomNumberColor as ButtonColor}
          variant="contained"
          sx={{ marginRight: 'auto', py: 0 }}
          disableElevation
          disableRipple
        >
          <Typography fontSize={40}>{roomNumber}</Typography>
        </Button>
      </Box>
      <DialogContentText fontSize={30} py={3}>
        ※対戦相手に部屋番号を伝えてください
        <Button onClick={() => getSocket().emit('createRoom')}>
          <Typography fontSize={20}>部屋番号を変更</Typography>
        </Button>
      </DialogContentText>
      <DialogContentText fontSize={50} paddingTop={8}>
        {!connecting && <CircularProgress />}
        参加者を待っています...
      </DialogContentText>
    </>
  );
};
export default RoomMatchDialogWaiting;
