import React from 'react'
import { Grid, Stack, Typography, Paper } from '@mui/material'

const Categories = () => {
  const categories = [
    {
      Title: 'Science',
      value: 'science'
    },
    {
      Title: 'Programming',
      value: 'programming'
    },
    {
      Title: 'News',
      value: 'news'
    },
    {
      Title: 'Gadgets',
      value: 'gadgets'
    },
    {
      Title: 'Tutorials',
      value: 'tutorials'
    }
  ]
  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <Stack>
          {categories.map((item) => (
            <Stack direction={'row'}>
              <Paper sx={{bgcolor: 'lightgray', width: '100%', p: 1, m: 1}}>
                <Typography >{item.Title}</Typography>
              </Paper>
            </Stack>
          ))}
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        Hellow
      </Grid>
    </Grid>
  )
}

export default Categories