import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { UserStatus } from 'common/commonConst';
import UserCard from 'components/atoms/UserCard';
import GameTimer from 'components/molecules/GameTimer';
import { FC } from 'react';

const userStatus: UserStatus = {
  userName: 'ゲスト',
  type: 'guest',
  lv: null,
};
const enemyStatus: UserStatus = {
  userName: 'はるき彦丸',
  type: 'player',
  lv: 38,
};

const ReversiStatus: FC = () => (
  <Card>
    <GameTimer seconds={null} move />
    <Grid container textAlign="center" p={2}>
      <Grid item xs={6}>
        <Button variant="outlined" color="error" sx={{ fontSize: 30, px: 10 }}>
          降参
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="warning"
          sx={{ fontSize: 30, px: 10 }}
        >
          待った
        </Button>
      </Grid>
    </Grid>
    <Box p={3} paddingTop={20}>
      <UserCard userStatus={userStatus} />
      <Typography py={4} fontSize={20} textAlign="center">
        VS
      </Typography>
      <UserCard userStatus={enemyStatus} />
    </Box>
  </Card>
);

export default ReversiStatus;
