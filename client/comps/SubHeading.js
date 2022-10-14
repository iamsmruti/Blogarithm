import { Typography } from "@mui/material";

const Heading = ({title, icon}) => {
    return (
        <Typography sx={{ mb: 2, mt: 2, fontSize: 32, fontWeight: 600}} variant='h4' align='left'>{title} {icon}</Typography>
    );
}
 
export default Heading;