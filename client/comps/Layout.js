import NavBar from "./Navbar";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({children}) => {
    const { asPath, pathname } = useRouter();
    return (
        <Box>
            {(asPath !== '/login' && asPath !== '/register') && <NavBar />}
            <Box sx={{mt: {md: 8, xs: 7}}}>
                {children}
            </Box>
            {(asPath !== '/login' && asPath !== '/register') && <Footer />}
        </Box>
    );
}
 
export default Layout;