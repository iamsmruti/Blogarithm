import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom'

const actions = [
    { icon: <EditIcon />, name: 'Post', path: '/post/create' },
    { icon: <EditIcon />, name: 'User', path: '/user/create' },
    { icon: <EditIcon />, name: 'Category', path: '/category/create' },
    { icon: <EditIcon />, name: 'Tag', path: '/tag/create' },
];

export default function ShortCut() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        setOpen(false)
        navigate(e)
    };

    return (
        <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'fixed', top: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={() => handleClose(action.path)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
