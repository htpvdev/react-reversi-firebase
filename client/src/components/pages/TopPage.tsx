import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const TopPage: FC<{ setTitle: (title: string | null) => void }> = ({
  setTitle,
}) => {
  setTitle('Classic Games Arina');

  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <Button variant="contained" color="success" component={Link} to="/game">
        <Typography fontSize="75px">Get Started</Typography>
      </Button>
    </Container>
  );
};
export default TopPage;
