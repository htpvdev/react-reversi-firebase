import { Box, Button, DialogContentText, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reversiSlice } from 'redux/reversi';

const RoomMatchDialogGuestNaming: FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { setGuestName } = reversiSlice.actions;
  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <Box textAlign="center">
      <DialogContentText fontSize={30} py={5}>
        プレイヤー名を入力してください
      </DialogContentText>
      <TextField
        label="プレイヤー名"
        variant="outlined"
        defaultValue="ゲスト"
        sx={{ px: 2 }}
        onChange={onChangeTextField}
      />
      <Button
        variant="contained"
        sx={{ fontSize: 20 }}
        onClick={() => dispatch(setGuestName(userName))}
      >
        開始
      </Button>
    </Box>
  );
};
export default RoomMatchDialogGuestNaming;
