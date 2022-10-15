import { Divider, Stack, Typography, Box, Paper, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import SubHeading from '../SubHeading';
import Link from 'next/link'

const categories = [
  {
    title: 'News',
    total: 24,
    path: '/blogs/news'
  },
  {
    title: 'Science',
    total: 24,
    path: '/blogs/science'
  },
  {
    title: 'Programming',
    total: 24,
    path: '/blogs/programming'
  },
  {
    title: 'Gadgets',
    total: 24,
    path: '/blogs/gadgets'
  },
  {
    title: 'Tutorials',
    total: 24,
    path: '/blogs/gadgets'
  },
];

const tags = [
    {
        title: 'Javascript',
        path: '/search?query=javascript'
    },
    {
        title: 'CSS',
        path: '/search?query=css'
    },
    {
        title: 'HTML',
        path: '/search?query=html'
    },
    {
        title: 'ReactJS',
        path: '/search?query=react'
    },
    {
        title: 'AngularJS',
        path: '/search?query=angular'
    }
]


const Categories = () => {
  return (
    <Box sx={{mb: 4}}>
      <SubHeading icon={<></>} title={'Categories'} />
      <Stack direction="column">
        {categories.map((item) => (
        <>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', '&:hover': {bgcolor: 'lightgray'}}}>
            <Link href={item.path}>
            <a>
                <Typography variant='body1' sx={{pt: 1.5, pb: 1.5, pl: 1}}>{item.title}</Typography>
            </a>
            </Link>
            <Paper sx={{fontSize: 14,p: 1,display: 'flex', alignItems: 'center', bgcolor: deepPurple[500], color: 'white', height: 'fit-content'}} elevation={0}>{item.total}</Paper>
          </Box>
          <Divider />
        </>
        ))}
      </Stack>
      <Box sx={{mt: 5}}>
        {tags.map((item) => (
          <Link href={item.path}>
          <a>
            <Button variant='contained' sx={{fontSize: 14, width: 'fit-content', m: 1}}>{item.title}</Button>
            </a>
            </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
