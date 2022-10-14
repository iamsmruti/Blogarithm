import { Box, Button, Grid, Typography } from "@mui/material";
import LoginComp from "./components/LoginComp";

const Auth = () => {
    return (
        <Box>
            <Grid sx={{ width: '100%', height: '100vh' }} container>
                <Grid sx={{
                    minHeight: '70vh',
                    bgcolor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: { md: 5, xs: 3 }
                }} item xs={12} md={6}>
                    <Box sx={{ display: 'flex' }}>
                        <h1 className="linear-wipe">Blogarithm</h1>
                        <Typography mt={2} variant="body2" color={'skyblue'}
                        >Dashboard</Typography>
                    </Box>

                    <Typography variant="body2" color={'gray'}
                    >A place for all your geeky dilemma.</Typography>

                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: 3,
                            color: 'skyblue',
                            border: '1px solid skyblue',
                            textTransform: 'capitalize'
                        }}
                    >
                        Visit Blogarithm
                    </Button>

                    <Typography
                        mt={'5rem'}
                        variant="h6"
                        color={'gray'}
                    >This is the Official CMS for Blogarithm.</Typography>
                    <Typography
                        mt={'1rem'}
                        variant="body1"
                        color={'gray'}
                    >Contact Admin for Login Information.</Typography>
                    <Typography
                        mt={'0.2rem'}
                        variant="body1"
                        color={'gray'}
                    >Email - smrutiranjanbadatya2@gmail.com</Typography>
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { md: 5, xs: 2 }
                }} item xs={12} md={6}>
                    <LoginComp />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Auth;