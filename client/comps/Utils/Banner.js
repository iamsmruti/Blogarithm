import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Banner = ({title}) => {
    return (
        <Box sx={{mt: -4, display: 'flex', alignItems: 'center', justifyContent: 'center', height: {md: 250, sm: 220, xs:150}}} className="bannerContainer">
            <Typography sx={{color: 'white', fontFamily: 'Montserrat Subrayada', fontSize: {md: 64, sm: 58, xs: 42}}}>
                {title}
            </Typography>
        </Box>
    );
}
 
export default Banner;