import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Board from 'components/reversi/Board';
import Status from 'components/reversi/Status';
import { firstSetting } from 'components/common/reversiConst';
import StartDialog from 'components/reversi/StartDialog';

const Reversi: React.FC = () => {
  const [setting, setSetting] = useState(firstSetting);

  return (
    <>
      {setting.status === 'boot' ? (<StartDialog />) : null}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        TOPへ戻る
      </Button>
      <Status setting={setting} />
      <Board setting={setting} setSetting={setSetting} />
    </>
  );
};

export default Reversi;
