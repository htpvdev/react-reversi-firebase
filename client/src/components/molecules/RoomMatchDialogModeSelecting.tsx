import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { reversiSlice } from 'redux/reversi';
import { useDispatch } from 'react-redux';

const RoomMatchDialogModeSelecting: FC = () => {
  const dispatch = useDispatch();
  const { setDialogStatus } = reversiSlice.actions;

  return (
    <>
      <DialogContentText fontSize={40} marginBottom={5}>
        選択してください。
      </DialogContentText>
      <Grid container textAlign="center">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="info"
            sx={{ px: 5, py: 10 }}
            onClick={() => dispatch(setDialogStatus('waiting'))}
          >
            <Typography fontSize={40}>部屋を作成する</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="warning"
            sx={{ px: 5, py: 10 }}
            onClick={() => dispatch(setDialogStatus('entering'))}
          >
            <Typography fontSize={40}>部屋に入室する</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default RoomMatchDialogModeSelecting;
