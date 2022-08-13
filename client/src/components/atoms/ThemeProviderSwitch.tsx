import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC, ReactElement } from 'react';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ThemeProviderSwitch: FC<{ light: boolean; children: ReactElement }> = ({
  light,
  children,
}) => (
  <ThemeProvider theme={light ? lightTheme : darkTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeProviderSwitch;
