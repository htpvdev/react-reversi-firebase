import { Box, Button, DialogContentText, TextField } from '@mui/material';
import { FC } from 'react';

const RoomMatchDialogGuestNaming: FC = () => (
  <Box textAlign="center">
    <DialogContentText fontSize={30} py={5}>
      プレイヤー名を入力してください
    </DialogContentText>
    <TextField
      label="プレイヤー名"
      variant="outlined"
      defaultValue="ゲスト"
      sx={{ px: 2 }}
    />
    <Button variant="contained" sx={{ fontSize: 20 }}>
      開始
    </Button>
  </Box>
);

export default RoomMatchDialogGuestNaming;
