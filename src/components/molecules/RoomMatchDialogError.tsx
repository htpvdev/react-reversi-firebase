import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { gameCodeList, GameCode } from '../../common/commonConst';

type Props = { errorText: string; gameCode: GameCode };

const RoomMatchDialogError: FC<Props> = ({ errorText, gameCode }) => (
  <Container sx={{ textAlign: 'center', p: 5 }}>
    <Typography fontSize={50}>{errorText}</Typography>
    <Button
      variant="contained"
      component={Link}
      to={gameCodeList[gameCode].url}
      sx={{ fontSize: 50, my: 5 }}
    >
      モード選択へ戻る
    </Button>
  </Container>
);
export default RoomMatchDialogError;
