import { Typography } from "@mui/material";

const Heading = ({title, icon}) => {
    return (
        <Typography sx={{fontFamily: 'Wallpoet', mb: 2, mt: {md: 4, xs: 2}}} variant='h4' align='left'>{title} {icon}</Typography>
    );
}
 
export default Heading;