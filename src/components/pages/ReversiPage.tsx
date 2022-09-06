import { useDispatch, useSelector } from 'react-redux';
import { GameMode, GameStatus } from 'redux/reversi';

import ReversiSelectGameStatus from 'components/organisms/ReversiSelectGameStatus';

import { RootState } from 'store';
import { Navigate } from 'react-router-dom';
import RoomMatch from 'components/organisms/RoomMatch';
import { commonSlice } from 'redux/common';

const ReversiPage: React.FC = () => {
  const gameMode = useSelector<RootState, GameMode>(
    (state) => state.reversi.gameMode,
  );
  const gameStatus = useSelector<RootState, GameStatus>(
    (state) => state.reversi.gameStatus,
  );
  const dispatch = useDispatch();

  if (gameStatus === 'selectGame') {
    dispatch(commonSlice.actions.setPageTitle('Reversi'));

    return <ReversiSelectGameStatus />;
  }
  dispatch(commonSlice.actions.setPageTitle(null));
  switch (gameMode) {
    case 'room':
      return <RoomMatch />;
    case 'rank':
      return null;
    case 'casual':
      return null;
    case 'cpu':
      return null;
    default:
      return <Navigate to="error" />;
  }

  // switch (gameStatus) {
  //   case 'selectGame':
  //     dispatch(setPageTitle(gameCodeList.rv.en));

  //     return <ReversiGameMode />;
  //   case 'startDialog':
  //     dispatch(setPageTitle(null));

  //     return <GameStartDialog />;

  //   case 'playing':
  //     dispatch(setPageTitle(null));

  //     return (
  //       <Grid container>
  //         <Grid item xs={3} />
  //         <Grid item xs={6}>
  //           <ReversiBoard />
  //         </Grid>
  //         <Grid item xs={3} paddingTop={6} paddingRight={6}>
  //           <ReversiStatus />
  //         </Grid>
  //       </Grid>
  //     );

  //   case 'result':
  //     dispatch(setPageTitle(gameCodeList.rv.en));

  //     return null;
  //   default:
  //     return null;
  // }
};
export default ReversiPage;
