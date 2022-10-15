import React from 'react'
import { Divider, IconButton, Stack } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';

import CategoryIcon from '@mui/icons-material/Category';
import StyleIcon from '@mui/icons-material/Style';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'flex-start'} sx={{ borderRight: '1px solid lightgray', height: 'calc(100vh - 60px)' }}>
      <Stack sx={{mb: 1}}>
        <IconButton href='/dashboard' sx={{ mb: 1 }}>
          <DashboardIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
        <IconButton href='/homepage' sx={{ mb: 1 }}>
          <DynamicFeedIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
        <IconButton href='/posts' sx={{ mb: 1 }}>
          <ArticleIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
        <IconButton href='/users' sx={{ mb: 1 }}>
          <GroupIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
      </Stack>
      <Divider sx={{bgcolor: 'lightgray', width: '50px'}}/>

      <Stack sx={{mt: 2}}>
        <IconButton href='/categories' sx={{ mb: 1 }}>
          <CategoryIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
        <IconButton href='tags' sx={{ mb: 1 }}>
          <StyleIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
      </Stack>
      <Stack sx={{mt: 'auto'}}>
        <IconButton sx={{ mb: 1 }}>
          <PowerSettingsNewIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
        <IconButton href='profile' sx={{ mb: 1 }}>
          <AccountCircleIcon sx={{ fontSize: 'larger' }} />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default Sidebar