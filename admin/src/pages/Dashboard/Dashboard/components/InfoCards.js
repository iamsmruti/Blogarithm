import React from 'react'
import { Stack, Paper, Grid, Typography, Box} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';

const InfoCards = () => {
  return (
    <Stack direction={'row'} sx={{ height: 'auto', overflowX: 'scroll'}} justifyContent={'flex-start'} >
        <Paper sx={{p: 3, width: '280px', minWidth: '280px', m: 1, border: '1px solid lightgray'}}>
            <Stack direction={'row'} justifyContent={'space-around'}container>
                <Box sx={{display: 'flex', alignItems: 'center'}} item md={5} xs={5}>
                    <PeopleIcon sx={{fontSize: '64px', color:'primary.main'}}/>
                </Box>
                <Stack item md={6} xs={6}>
                    <Typography variant='h6' sx={{fontWeight: '700', color: 'primary.main', textTransform: 'uppercase'}}>Users</Typography>
                    <Typography variant='h4' sx={{fontWeight: '700'}}>6789</Typography>
                </Stack>
            </Stack>
        </Paper>
        <Paper sx={{p: 3, width: '280px', minWidth: '280px', m: 1, border: '1px solid lightgray'}}>
            <Stack direction={'row'} justifyContent={'space-around'}container>
                <Box sx={{display: 'flex', alignItems: 'center'}} item md={5} xs={5}>
                    <PeopleIcon sx={{fontSize: '64px', color:'primary.main'}}/>
                </Box>
                <Stack item md={6} xs={6}>
                    <Typography variant='h6' sx={{fontWeight: '700', color: 'primary.main', textTransform: 'uppercase'}}>Users</Typography>
                    <Typography variant='h4' sx={{fontWeight: '700'}}>6789</Typography>
                </Stack>
            </Stack>
        </Paper>
        <Paper sx={{p: 3, width: '280px', minWidth: '280px', m: 1, border: '1px solid lightgray'}}>
            <Stack direction={'row'} justifyContent={'space-around'}container>
                <Box sx={{display: 'flex', alignItems: 'center'}} item md={5} xs={5}>
                    <PeopleIcon sx={{fontSize: '64px', color:'primary.main'}}/>
                </Box>
                <Stack item md={6} xs={6}>
                    <Typography variant='h6' sx={{fontWeight: '700', color: 'primary.main', textTransform: 'uppercase'}}>Users</Typography>
                    <Typography variant='h4' sx={{fontWeight: '700'}}>6789</Typography>
                </Stack>
            </Stack>
        </Paper>
        <Paper sx={{p: 3, width: '280px', minWidth: '280px', m: 1, border: '1px solid lightgray'}}>
            <Stack direction={'row'} justifyContent={'space-around'}container>
                <Box sx={{display: 'flex', alignItems: 'center'}} item md={5} xs={5}>
                    <PeopleIcon sx={{fontSize: '64px', color:'primary.main'}}/>
                </Box>
                <Stack item md={6} xs={6}>
                    <Typography variant='h6' sx={{fontWeight: '700', color: 'primary.main', textTransform: 'uppercase'}}>Users</Typography>
                    <Typography variant='h4' sx={{fontWeight: '700'}}>6789</Typography>
                </Stack>
            </Stack>
        </Paper>
    </Stack>
  )
}

export default InfoCards