import { AccountCircle } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { UserStatus } from '../../common/commonConst';

type CardColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

const cardColorList: CardColor[] = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
];

type Props = { userStatus: UserStatus | null };

const UserCard: FC<Props> = ({ userStatus }) => {
  const [cardColor, setCardColor] = useState<CardColor>(
    cardColorList[Math.floor(Math.random() * 6)],
  );

  useEffect(() => {
    setCardColor(cardColorList[Math.floor(Math.random() * 6)]);
  }, [userStatus]);

  return (
    <Button
      color={cardColor}
      variant="contained"
      sx={{ px: 3, py: 2, maxWidth: 750 }}
      // sx={{ py: 2 }}
      disableElevation
      disableRipple
      fullWidth
    >
      <AccountCircle fontSize="large" sx={{ marginRight: 'auto' }} />
      <Typography fontSize={30} sx={{ px: 3 }}>
        {userStatus?.type === 'guest'
          ? 'ゲスト'
          : `Lv ${String(userStatus?.lv)}`}
      </Typography>
      <Typography fontSize={30} sx={{ px: 3 }} flexGrow={1}>
        {userStatus?.userName}
      </Typography>
    </Button>
  );
};

export default UserCard;
