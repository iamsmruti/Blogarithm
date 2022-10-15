import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const StyledTab = () => {
  return (
    <Box sx={{width: '100%'}}>
        <Typography sx={{fontSize: '28px', fontWeight: 600}}>All Posts</Typography>
        <Divider />
    </Box>
  )
}

export default StyledTab