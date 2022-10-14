import Layout from '../comps/Layout';
import '../styles/globals.css';

import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: red,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 915,
      lg: 1200,
      xl: 1536,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
