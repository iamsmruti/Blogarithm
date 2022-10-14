import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Drawer
} from '@mui/material';

import styles from '../../styles/Home.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MobNav from './comps/MobNav';

import SearchBar from '../Utils/SearchBar';
import { menuItems } from '../Utils/MenuItems';


const NavBar = () => {
  const router = useRouter()
  const [auth, setAuth] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  const [query, setQuery] = useState('');

  useEffect(() => {
    if(query === '') {
      router.push('/')
    } else {
      router.push('/search?query=' + query)
    }
  }, [query])

  const handleLogout = () => {
    setAuth = false
  }

  const handleDrawer = (state) => () => {
    setDrawerState(state);
  }

  return (
    <>
      <AppBar sx={{ bgcolor: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <a>
              <Typography className={styles.linearWipe}>Blogarithm</Typography>
            </a>
          </Link>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            <Box>
              {menuItems.map((item) => (
                <Button onClick={() => router.push(item.path)} sx={{ textTransform: 'capitalize', color: 'white' }}>
                  {item.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SearchBar setQuery={setQuery}/>
              
              {!auth && <Button onClick={() => router.push('/login')} sx={{ ml: 2 }} variant="contained">Login</Button>}
              {auth && (
                <IconButton sx={{ ml: 2 }}>
                  <Avatar>H</Avatar>
                </IconButton>
              )}
            </Box>
          </Box>

          <Box sx={{ display: { md: 'none', lg: 'none', xl: 'none' } }}>
            <IconButton onClick={handleDrawer(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'right'} open={drawerState} onClose={handleDrawer(false)}>
        {<MobNav anchor={'right'} handleDrawer={handleDrawer} handleLogout={handleLogout} auth={auth} />}
      </Drawer>
    </>
  );
};

export default NavBar;
