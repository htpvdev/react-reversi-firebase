import { FC, ReactElement, useState } from 'react';

import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { AccountCircle } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import ThemeProviderSwitch from 'components/atoms/ThemeProviderSwitch';

type Props = { children: ReactElement };

const AppFlame: FC<Props> = ({ children }) => {
  const pageTitle = useSelector((state: RootState) => state.common.pageTitle);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLight, setIsLight] = useState<boolean>(true);
  // const [isLight] = useState<boolean>(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <ThemeProviderSwitch light={isLight}>
      <Box sx={{ flex: 1, height: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            {/* <Button component={Link} to="/"> */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="/"
            >
              <VideogameAssetIcon />
            </IconButton>
            {/* </Button> */}
            <Button
              component={Link}
              to="/game"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Games
            </Button>
            <Button
              component={Link}
              to="/ranking"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Ranking
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            {/* <div> */}
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isLight}
                    onChange={() => setIsLight((c) => !c)}
                    aria-label="login switch"
                  />
                }
                label={isLight ? 'Light' : 'Dark'}
              />
            </FormGroup>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
            {/* </div> */}
            <SettingsIcon />
          </Toolbar>
        </AppBar>
        <Container sx={{ textAlign: 'center' }}>
          {pageTitle && (
            <Typography p={5} fontSize="100px">
              {pageTitle}
            </Typography>
          )}
        </Container>
        <Box>{children}</Box>
      </Box>
    </ThemeProviderSwitch>
  );
};

export default AppFlame;
