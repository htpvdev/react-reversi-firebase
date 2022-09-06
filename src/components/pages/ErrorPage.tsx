import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { commonSlice } from 'redux/common';
import { useDispatch } from 'react-redux';

const ErrorPage: React.FC = () => {
  const { setPageTitle } = commonSlice.actions;
  useDispatch()(setPageTitle('Error'));

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
