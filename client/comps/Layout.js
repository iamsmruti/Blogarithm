import NavBar from "./NavBar/NavBar.js";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({children}) => {
    const { asPath, pathname } = useRouter();
    console.log(asPath, pathname)
    return (
        <div>
            {(asPath !== '/login' && asPath !== '/register') && <NavBar />}
            {children}
            {(asPath !== '/login' && asPath !== '/register') && <Footer />}
        </div>
    );
}
 
export default Layout;