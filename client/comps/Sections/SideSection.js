import { Grid, Paper, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import SubHeading from '../SubHeading';
import Link from 'next/link';

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

const SideSection = ({ items, title }) => {
  return (
    <Box sx={{mb: {md: 10, xs: 5}}}>
      <SubHeading title={title} />
      {itemData.map((item) => (
        <Grid key={item.title} container spacing={2}>
          <Grid item md={4} xs={4}>
            <Box>
              <img width={'100%'} src={item.img} alt="" />
            </Box>
          </Grid>
          <Grid sx={{pr: 1}} item md={8} xs={8}>
            <Box>
              <Link href="">
                <a>
                  <Typography
                    sx={{
                      color: 'black',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: deepPurple[500],
                      },
                      overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                    }}
                    variant="body1"
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </Typography>
                </a>
              </Link>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default SideSection;
