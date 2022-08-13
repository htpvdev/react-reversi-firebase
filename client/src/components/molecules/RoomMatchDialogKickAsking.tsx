import { Box, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import UserCard from 'components/atoms/UserCard';
import { UserStatus } from '../../common/commonConst';

type Props = {
  enemyStatus: UserStatus;
};

const RoomMatchDialogKickAsking: FC<Props> = ({ enemyStatus }) => (
  <>
    <Box textAlign="center" py={4}>
      <UserCard userStatus={enemyStatus} />
    </Box>
    <DialogContentText textAlign="center" fontSize={40} my={5}>
      ユーザーが入室しようとしています。
    </DialogContentText>
    <Grid container textAlign="center">
      <Grid item xs={6}>
        <Button variant="contained" color="primary" sx={{ p: 2 }}>
          <Typography fontSize={40}>
            このプレイヤーと
            <br />
            ゲームを開始する
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="error" sx={{ p: 2 }}>
          <Typography fontSize={40}>
            このプレイヤーの
            <br />
            入室を拒否する
          </Typography>
        </Button>
      </Grid>
    </Grid>
  </>
);
export default RoomMatchDialogKickAsking;
