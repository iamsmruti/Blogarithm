import { Box, Grid, Typography, Button } from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SideSection from './SideSection';
import Categories from './Categories';

import Link from 'next/link';
import { deepPurple } from '@mui/material/colors';
import CategoryButton from '../assets/Button';

const Section1 = () => {
  return (
    <>
      {itemData.map((item) => (
        <Grid sx={{mb: 3}} container spacing={2}>
          <Grid item xs={12} md={4} sm={6}>
            <img width={'100%'} src={item.img} alt="" />
          </Grid>

          <Grid item xs={12} md={8} sm={6}>
            <Box sx={{ pl: {md: 2, xs: 0}, pb: {md: 2, xs: 5} }}>
              <Box sx={{ display: 'flex' }}>
                <Button
                  onClick={() => router.push('/blog/news')}
                  variant="contained"
                  sx={{ p: 0, fontSize: 10, fontWeight: 400, mb: 1, mt: {md: 0, xs: 1} }}
                >
                  Category
                </Button>

                <Typography sx={{ ml: 2 ,  mt: {md: 0, xs: 1}}} variant="body2">
                  27 May 2022
                </Typography>
              </Box>

              <Link href="">
                <a>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'black',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: deepPurple[500],
                      },
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </Typography>
                </a>
              </Link>

              <Typography
                variant="body2"
                sx={{
                  color: 'gray',
                  maxWidth: { md: '80%' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Section1;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
