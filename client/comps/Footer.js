import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styles from '../styles/Home.module.css';
import { Container } from "@mui/system";
import { deepPurple } from "@mui/material/colors";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link";

import { menuItems } from "./Utils/MenuItems";

const Footer = () => {

    return (
        <Box sx={{ bgcolor: 'black', pt: 5 }}>
            <Container>
                <Grid sx={{ pl: 3, pr: 3, pb: 3 }} container spacing={3}>
                    <Grid sx={{ mb: 3 }} item xs={12} md={4}>
                        <Typography className={styles.linearWipe2}>Blogarithm</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray' }}>A place for all your geeky dilemma.</Typography>

                        <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray', fontSize: 13, color: deepPurple[400], mt: 4 }}>Copyright <CopyrightIcon sx={{ fontSize: 13 }} />Blogarithm 2022</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 400, color: 'gray', fontSize: 13, color: 'white', mt: 1, ml: 0 }}>Made with <FavoriteBorderIcon sx={{ fontSize: 13, color: 'red' }} /></Typography>
                    </Grid>
                    <Grid sx={{ mb: 3 }} item xs={6} md={2.5}>
                        <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>About Us</Typography>
                        <Link href={'/about'}>
                            <a>
                                <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: deepPurple[400] }, mt: 2 }}>About Us</Typography>
                            </a>
                        </Link>
                        <Link href={'/joinus'}>
                            <a>
                                <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: deepPurple[400] }, mt: 2 }}>Join Us</Typography>
                            </a>
                        </Link>
                        <Link href={'/contact'}>
                            <a>
                                <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: deepPurple[400] }, mt: 2 }}>Contact</Typography>
                            </a>
                        </Link>
                    </Grid>
                    <Grid sx={{ mb: 3 }} item xs={6} md={2.5}>
                        <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Categories</Typography>
                        {menuItems.map((item) => (
                            <Link href={item.path}>
                                <a>
                                    <Typography variant="body1" sx={{ color: 'gray', "&:hover": { color: deepPurple[400] }, mt: 2 }}>{item.title}</Typography>
                                </a>
                            </Link>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Join our Newsletter</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <TextField fullWidth sx={{ bgcolor: deepPurple[100], mt: 3 }} id="filled-basic" label="E-mail" variant="filled" />
                            <Button sx={{ mt: 1 }} variant="contained">Subscribe</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;