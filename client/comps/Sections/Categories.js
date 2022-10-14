import { Divider, Stack, Typography, Box, Paper, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import SubHeading from '../SubHeading';
import Link from 'next/link'

const categories = [
  {
    title: 'News',
    total: 24,
  },
  {
    title: 'Science',
    total: 24,
  },
  {
    title: 'Programming',
    total: 24,
  },
  {
    title: 'Gadgets',
    total: 24,
  },
  {
    title: 'Tutorials',
    total: 24,
  },
];

const tags = [
    {
        title: 'Javascript'
    },
    {
        title: 'CSS'
    },
    {
        title: 'HTML'
    },
    {
        title: 'ReactJS'
    },
    {
        title: 'AngularJS'
    }
]


const Categories = () => {
  return (
    <Box sx={{mb: 4}}>
      <SubHeading title={'Categories'} />
      <Stack direction="column">
        {categories.map((item) => (
        <>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', '&:hover': {bgcolor: 'lightgray'}}}>
            <Link href={''}>
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
            <Button variant='contained' sx={{fontSize: 14, width: 'fit-content', m: 1}}>{item.title}</Button>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
