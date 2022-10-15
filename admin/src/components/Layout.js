import { Box,Grid } from '@mui/material'
import Topbar from '../components/Navbar/Topbar'
import Sidebar from '../components/Navbar/Sidebar'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
    const location = useLocation()
    return (
        <>
            {location.pathname !== '/login' && <Box>
                <Topbar />
                <Box>
                    <Grid container>
                        <Grid item md={0.5} xs={1.5}>
                            <Sidebar />
                        </Grid>
                        <Grid sx={{height: 'calc(100vh - 60px)', overflowX: 'hidden', overflowY: 'scroll', position: 'relative'}} item md={11.5} xs={10.5}>
                            <Box sx={{p: 2, maxWidth: '800px'}} >
                                {children}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>}
            {location.pathname === '/login' && <>{children}</>}
        </>
    );
}
 
export default Layout;