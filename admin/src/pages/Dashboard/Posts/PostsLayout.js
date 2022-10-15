import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import StyledTab from '../../../components/StyledComponents/StyledTab'

const PostsLayout = () => {
  return (
    <Box>
      <StyledTab />
      <Outlet />
    </Box>
  )
}

export default PostsLayout