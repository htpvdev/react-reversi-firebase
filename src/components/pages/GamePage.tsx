import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { commonSlice } from 'redux/common';

const GamePage: React.FC = () => {
  const { setPageTitle } = commonSlice.actions;
  useDispatch()(setPageTitle('Games'));

  return (
    <Grid container textAlign="center">
      <Grid item xs={2} />
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="success"
          component={Link}
          to="/reversi"
        >
          <Typography fontSize="75px">オセロ</Typography>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="info"
          component={Link}
          to="/chess"
          disabled
        >
          <Typography fontSize="75px">チェス</Typography>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="warning"
          component={Link}
          to="/shogi"
          disabled
        >
          <Typography fontSize="75px">将棋</Typography>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/gobblet"
          disabled
        >
          <Typography fontSize="50px">
            ゴブレット
            <br />
            ゴブラーズ
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
export default GamePage;
