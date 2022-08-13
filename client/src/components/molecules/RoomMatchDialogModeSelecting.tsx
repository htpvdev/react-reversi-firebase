import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import DialogContentText from '@mui/material/DialogContentText';

const RoomMatchDialogModeSelecting: FC = () => (
  <>
    <DialogContentText fontSize={40} marginBottom={5}>
      選択してください。
    </DialogContentText>
    <Grid container textAlign="center">
      <Grid item xs={6}>
        <Button variant="contained" color="info" sx={{ px: 5, py: 10 }}>
          <Typography fontSize={40}>部屋を作成する</Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="warning" sx={{ px: 5, py: 10 }}>
          <Typography fontSize={40}>部屋に入室する</Typography>
        </Button>
      </Grid>
    </Grid>
  </>
);
export default RoomMatchDialogModeSelecting;
