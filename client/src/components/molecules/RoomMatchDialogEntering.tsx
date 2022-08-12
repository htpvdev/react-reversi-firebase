import { Box, TextField } from '@mui/material';
import { FC, useState } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { LoadingButton } from '@mui/lab';
import InputIcon from '@mui/icons-material/Input';

type Props = {
  roomNumber: string;
};

const RoomMatchDialogEntering: FC<Props> = ({ roomNumber }) => {
  const [changed, setChanged] = useState(false);

  return (
    <>
      <DialogContentText fontSize={30} py={3}>
        ※対戦相手から聞いた部屋番号を入力してください
      </DialogContentText>
      <Box display="flex" py={5}>
        <DialogContentText fontSize={40}>部屋番号：</DialogContentText>
        <TextField
          color="warning"
          defaultValue={roomNumber}
          onChange={() => setChanged(false)}
        />
        <LoadingButton
          loading={changed}
          loadingPosition="start"
          startIcon={<InputIcon />}
          variant="contained"
          color="warning"
          sx={{ py: 0, mx: 2, fontSize: 20 }}
          onClick={() => setChanged(true)}
        >
          入室する
        </LoadingButton>
      </Box>
    </>
  );
};
export default RoomMatchDialogEntering;
