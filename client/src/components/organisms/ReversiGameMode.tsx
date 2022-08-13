import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const ReversiGameMode: FC = () => (
  <Grid container spacing={4} textAlign="center">
    {/* row 1 */}
    <Grid item xs={3}>
      <Button variant="contained" color="success">
        <Typography fontSize="75px">ルームマッチ</Typography>
      </Button>
    </Grid>
    <Grid item xs={3}>
      <Button variant="contained" color="info" disabled>
        <Typography fontSize="75px">ランクマッチ</Typography>
      </Button>
    </Grid>
    <Grid item xs={3}>
      <Button variant="contained" color="warning" disabled>
        <Typography fontSize="75px">
          カジュアル
          <br />
          マッチ
        </Typography>
      </Button>
    </Grid>
    <Grid item xs={3}>
      <Button variant="contained" color="secondary" disabled>
        <Typography fontSize="75px">vs CPU</Typography>
      </Button>
    </Grid>
  </Grid>
);

export default ReversiGameMode;
