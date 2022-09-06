import { Box, Typography } from '@mui/material';
import { secondsToZeroFillMinutes } from 'common/commonMethod';
import { FC } from 'react';

type Props = {
  seconds: number | null;
  move: boolean;
};

const GameTimer: FC<Props> = ({ seconds, move }) => {
  const times =
    seconds === null ? ['--', '--'] : secondsToZeroFillMinutes(seconds);

  return (
    <Box bgcolor={move ? 'yellowGreen' : 'lightgray'} textAlign="center" my={5}>
      <Typography fontSize={30} p={1}>
        {move ? 'あなたのターンです' : '待機中です...'}
      </Typography>
      <Typography fontSize={30} p={0}>
        【残り時間】
      </Typography>

      <Typography fontSize={100}>{`${times[0]} : ${times[1]}`}</Typography>
      {move}
    </Box>
  );
};

export default GameTimer;
