import React from 'react'
import InfoCards from './components/InfoCards'
import { Box, Divider } from '@mui/material'

const Dashboard = () => {
  return (
    <Box sx={{height: 'auto', width: 'calc(100vw - 60px)'}}>
      <InfoCards />
      <Divider sx={{mt: 3}}/>
    </Box>
  )
}

export default Dashboard