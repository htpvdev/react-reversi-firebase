import { FC } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const { REACT_APP_BACKEND_URL } = process.env;

const Welcome: FC = () => (
  <>
    <h1>Welcome to Game Center!</h1>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/reversi"
    >
      Reversi
    </Button>
  </>
);

export default Welcome;
