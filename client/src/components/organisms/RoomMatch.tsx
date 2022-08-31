import { Grid } from '@mui/material';
import { UserStatus } from 'common/commonConst';
import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { RootState } from 'store';
import { GameStatus, reversiSlice } from '../../redux/reversi';
import ReversiBoard from './ReversiBoard';
import ReversiStatus from './ReversiStatus';
import RoomMatchDialog from './RoomMatchDialog';

const socket = io('http://localhost:4000');

const RoomMatch: React.FC = () => {
  // redux
  const gameStatus = useSelector<RootState, GameStatus>(
    (state) => state.reversi.gameStatus,
  );
  const dispatch = useDispatch();
  const { kickAsking } = reversiSlice.actions;

  const [roomNumber, setRoomNumber] = useState<string | null>(null);

  const getSocket = useCallback(() => socket, []);

  useEffect(() => {
    socket.on('roomCreated', (newRoomNumber: string) => {
      console.log(`new roomnumber [${newRoomNumber}] recieved`);
      setRoomNumber(newRoomNumber);
    });

    socket.on('askJoinRoom', (enemyStatus: UserStatus) => {
      console.log('recieve enemy status', enemyStatus);
      dispatch(kickAsking(enemyStatus));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('roomCreated');
      socket.off('askJoinRoom');
    };
  }, []);

  switch (gameStatus) {
    case 'startDialog':
      return (
        <RoomMatchDialog
          gameCode="rv"
          roomNumber={roomNumber}
          connecting
          getSocket={getSocket}
        />
      );
    case 'playing':
      return (
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <ReversiBoard />
          </Grid>
          <Grid item xs={3} paddingTop={6} paddingRight={6}>
            <ReversiStatus />
          </Grid>
        </Grid>
      );
    case 'result':
      return null;
    default:
      return null;
  }
};

export default RoomMatch;
