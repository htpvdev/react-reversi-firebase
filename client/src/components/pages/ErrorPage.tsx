import { Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC<{ setTitle: (title: string | null) => void }> = ({
  setTitle,
}) => {
  setTitle('Error');

  return (
    <Container sx={{ textAlign: 'center', p: 5 }}>
      <Typography fontSize={50}>問題が発生しました。</Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ fontSize: 50, my: 5 }}
      >
        トップへ戻る
      </Button>
    </Container>
  );
};
export default ErrorPage;
