import React from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'

const search = () => {
    const { query } = useRouter().query
  return (
    <Box sx={{height: 300, mt: '60px'}}>{query}</Box>
  )
}

export default search