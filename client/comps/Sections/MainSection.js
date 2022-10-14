import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MainSection() {
  const router = useRouter();
  return (
    <>
      <ImageList
        cols={3}
        sx={{
          display: { xs: 'none', md: 'grid', sm: 'grid' },
          MaxWidth: 750,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 150, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position="top"
                actionIcon={
                  <IconButton sx={{ color: 'white' }}>
                    <BookmarkBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
              <Box
                sx={{
                  width: '100%',
                  height: '150px',
                  position: 'absolute',
                  bottom: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 20%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  pl: 2,
                  pb: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  onClick={() => router.push('/blog/news')}
                  variant="contained"
                  sx={{ p: 0, fontSize: 10, fontWeight: 400 }}
                >
                  Category
                </Button>
                <Link href="">
                  <a>
                    <Typography
                      sx={{
                        color: 'white',
                        maxWidth: { md: '90%' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                        fontSize: 20,
                      }}
                      variant="body1"
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
        cols={2}
        sx={{
          display: { xs: 'grid', md: 'none', sm: 'none' },
          MaxWidth: 750,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        gap={1}
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
                position="top"
                actionIcon={
                  <IconButton sx={{ color: 'white' }}>
                    <BookmarkBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />

              <Box
                sx={{
                  width: '100%',
                  height: '150px',
                  position: 'absolute',
                  bottom: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 20%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  pl: 2,
                  pb: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  onClick={() => router.push('/blog/news')}
                  variant="contained"
                  sx={{ p: 0, fontSize: 10, fontWeight: 400 }}
                >
                  Category
                </Button>
                <Link href="">
                  <a>
                    <Typography
                      sx={{
                        color: 'white',
                        maxWidth: { md: '90%' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                        fontSize: 15,
                      }}
                      variant="body1"
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
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
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
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
];
