import { useEffect, useRef, useState } from 'react';
import {
  PieceSide,
  reversiInitialPieceList,
  UserStatus,
} from '../common/commonConst';

export type GameStatus = 'selectGame' | 'startDialog' | 'playing' | 'result';
export type MatchMode = 'room' | 'rank' | 'casual' | 'cpu' | null;

const useReversiPageState = () => {
  // コンポーネントで利用するstate変数
  const [gameStatus, setGameStatus] = useState<GameStatus>('selectGame');
  const [matchMode, setMatchMode] = useState<MatchMode>(null);
  const [field, setField] = useState<PieceSide[][]>(reversiInitialPieceList);
  const [roomNumber, setRoomNumber] = useState<number | null>(null);
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [enemyStatus, setEnemyStatus] = useState<UserStatus | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(-1);
  const [isMyturn, setIsMyTurn] = useState<boolean>(false);

  // フック内変数
  const timerId = useRef<NodeJS.Timeout>();

  // タイマー用関数
  const tick = () => setTimeLeft((t) => t - 1);
  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  // タイマー用Effect
  useEffect(() => {
    if (isMyturn) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clearTimer();
    }
  }, [isMyturn]);

  return {
    gameStatus,
    setGameStatus,
    matchMode,
    setMatchMode,
    field,
    setField,
    roomNumber,
    setRoomNumber,
    userStatus,
    setUserStatus,
    enemyStatus,
    setEnemyStatus,
    timeLeft,
    setTimeLeft,
    isMyturn,
    setIsMyTurn,
  };
};

export default useReversiPageState;
