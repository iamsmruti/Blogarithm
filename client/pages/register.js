import { Box, Button, Grid, Typography } from '@mui/material';
import RegisterComp from '../comps/Auth/RegisterComp';

const Login = () => {
  return (
    <Box>
      <Grid sx={{ width: '100%', height: '100vh' }} container>
        <Grid
          sx={{
            minHeight: '70vh',
            bgcolor: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: { md: 5, xs: 3 },
          }}
          item
          xs={12}
          md={6}
        >
          <Box sx={{ display: 'flex' }}>
            <h1 className="linear-wipe">Blogarithm</h1>
          </Box>

          <Typography variant="body2" color={'gray'}>
            A place for all your geeky dilemma.
          </Typography>

          <Typography mt={'5rem'} variant="h6" color={'gray'}>
            Login to get the Post Saving Feature.
          </Typography>
          <Typography mt={'1rem'} variant="body1" color={'gray'}>
            Contact Admin for Adding your own Post.
          </Typography>
          <Typography mt={'0.2rem'} variant="body1" color={'gray'}>
            Email - smrutiranjanbadatya2@gmail.com
          </Typography>

          <Button
            variant="outlined"
            sx={{
              marginTop: 3,
              color: 'skyblue',
              border: '1px solid skyblue',
              textTransform: 'capitalize',
            }}
          >
            Admin Dashboard
          </Button>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { md: 5, xs: 2 },
          }}
          item
          xs={12}
          md={6}
        >
          <RegisterComp />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
