import {
    Box,
    Button,
    IconButton,
    Avatar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
  } from '@mui/material';
  import SettingsIcon from '@mui/icons-material/Settings';
  import LogoutIcon from '@mui/icons-material/Logout';

  import SearchBar from '../../Utils/SearchBar';
  import { MenuItemsMob } from '../../Utils/MenuItems';

const MobNav = ({anchor, handleDrawer, handleLogout, auth}) => {
    return (
        <>
            <Box
                sx={{ width: 250, bgcolor: 'black', height: '100%', color: 'white' }}
                role="presentation"
                onClick={handleDrawer(anchor, false)}
                onKeyDown={handleDrawer(anchor, false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 2,
                    }}
                >
                    {!auth && <Button sx={{ mb: 2 }} variant="contained">Login</Button>}
                    {auth &&
                        <IconButton sx={{ ml: 2 }}>
                            <Avatar sx={{ width: 70, height: 70 }}>H</Avatar>
                        </IconButton>
                    }
                </Box>
                {auth && <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => router.push('/user/profile')}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Profile'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Logout'} />
                        </ListItemButton>
                    </ListItem>
                </List>}

                <Divider sx={{ bgcolor: 'lightgray' }} />

                <Box sx={{mt: 2, pr: 1}}>
                    <SearchBar />
                </Box>

                <List>
                    {MenuItemsMob.map((item) => (
                        <ListItem disablePadding>
                        <ListItemButton onClick={() => router.push(item.path)}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
}

export default MobNav