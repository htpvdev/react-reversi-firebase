import { useRef, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Board from 'components/reversi/Board';
import Status from 'components/reversi/Status';
import { firstSetting } from 'components/common/reversiConst';
import StartDialog from 'components/reversi/StartDialog';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const Reversi: React.FC = () => {
  const [setting, setSetting] = useState(firstSetting);
  const [msgList, setMsgList] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('recieveChat', (msg: string) => {
      console.log('これがmsg', msg);
      setMsgList((c) => [...c, msg]);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('recieveChat');
    };
  }, []);

  const handleClick = () => {
    console.log('handleClick called', inputRef.current?.value);
    socket.emit('sendChat', inputRef.current?.value);
  };

  return (
    <>
      <p>通信状態{String(isConnected)}</p>
      <ul>
        {msgList.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button type="button" onClick={() => handleClick()}>
        送信
      </button>
      <br />
      <br />
      <br />
      {setting.status === 'boot' ? <StartDialog /> : null}
      <Button variant="contained" color="primary" component={Link} to="/">
        TOPへ戻る
      </Button>
      <Status setting={setting} />
      <Board setting={setting} setSetting={setSetting} />
    </>
  );
};

export default Reversi;
