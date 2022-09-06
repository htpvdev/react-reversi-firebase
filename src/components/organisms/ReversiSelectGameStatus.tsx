import { Button, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { reversiSlice } from 'redux/reversi';

const ReversiSelectGameStatus: React.FC = () => {
  const dispatch = useDispatch();
  const { selectGameMode } = reversiSlice.actions;

  return (
    <Grid container spacing={4} textAlign="center">
      {/* row 1 */}
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(selectGameMode('room'))}
        >
          <Typography fontSize="75px">ルームマッチ</Typography>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="info"
          onClick={() => dispatch(selectGameMode('rank'))}
          disabled
        >
          <Typography fontSize="75px">ランクマッチ</Typography>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => dispatch(selectGameMode('casual'))}
          disabled
        >
          <Typography fontSize="75px">
            カジュアル
            <br />
            マッチ
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(selectGameMode('cpu'))}
          disabled
        >
          <Typography fontSize="75px">vs CPU</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
export default ReversiSelectGameStatus;
