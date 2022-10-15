import { Box, Typography, Button, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Link from 'next/link';
import { deepPurple } from '@mui/material/colors';
import { useRouter } from 'next/router';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Section3 = () => {
  const router = useRouter()
  return (
    <>
      <ImageList
        cols={3}
        sx={{
          display: { xs: 'none', md: 'grid', sm: 'grid' },
          MaxWidth: 500,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        gap={10}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />

              <Box sx={{ pt: 2, pb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <Button
                    onClick={() => router.push('/blog/news')}
                    variant="contained"
                    sx={{ p: 0, fontSize: 10, fontWeight: 400, mb: 1 }}
                  >
                    Category
                  </Button>

                  <Typography sx={{ ml: 2 }} variant="body2">
                    27 May 2022
                  </Typography>
                </Box>

                <Link href="">
                  <a>
                    <Typography
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
              </Box>
            </ImageListItem>
          );
        })}
      </ImageList>
      <ImageList
        cols={1}
        sx={{
          display: { xs: 'grid', md: 'none', sm: 'none' },
          MaxWidth: 500,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        gap={10}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />

              <Box sx={{ pt: 2, pb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <Button
                    onClick={() => router.push('/blog/news')}
                    variant="contained"
                    sx={{ p: 0, fontSize: 10, fontWeight: 400, mb: 1 }}
                  >
                    Category
                  </Button>

                  <Typography sx={{ ml: 2 }} variant="body2">
                    27 May 2022
                  </Typography>
                </Box>

                <Link href="">
                  <a>
                    <Typography
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
              </Box>
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
};

export default Section3;

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
