import { Grid } from '@mui/material';
import ReversiBoard from 'components/organisms/ReversiBoard';
import ReversiGameMode from 'components/organisms/ReversiGameMode';
import ReversiStatus from 'components/organisms/ReversiStatus';
import RoomMatchDialog from 'components/organisms/RoomMatchDialog';
import { FC } from 'react';
import {
  gameCodeList,
  reversiInitialPieceList,
} from '../../common/commonConst';

type Props = {
  setTitle: (title: string | null) => void;
  pageMode: 'selectGame' | 'dialog' | 'playing';
};

const ReversiPage: FC<Props> = ({ setTitle, pageMode }) => {
  setTitle(pageMode === 'selectGame' ? gameCodeList.rv.en : null);

  if (pageMode === 'selectGame') {
    return <ReversiGameMode />;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <ReversiBoard field={reversiInitialPieceList} />
        </Grid>
        <Grid item xs={3} paddingTop={6} paddingRight={6}>
          <ReversiStatus />
        </Grid>
      </Grid>
      {pageMode === 'dialog' && (
        <RoomMatchDialog
          matchStatus="kickAsking"
          gameCode="rv"
          connecting={false}
        />
      )}
    </>
  );
};
export default ReversiPage;
