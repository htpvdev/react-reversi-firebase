import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { commonSlice } from 'redux/common';

const TopPage: React.FC = () => {
  const { setPageTitle } = commonSlice.actions;
  useDispatch()(setPageTitle('Classic Games Arina'));

  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <Button variant="contained" color="success" component={Link} to="/game">
        <Typography fontSize="75px">Get Started</Typography>
      </Button>
    </Container>
  );
};
export default TopPage;
