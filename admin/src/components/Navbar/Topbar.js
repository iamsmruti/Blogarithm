import { Stack, Typography } from '@mui/material'
import React from 'react'

const Topbar = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{height: '60px', bgcolor: 'black', pl: 2, pr: 2}}>
      <Typography variant='h4' className='linear-wipe'>Blogarithm</Typography>
    </Stack>
  )
}

export default Topbar