import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button, IconButton,Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import Link from 'next/link';
import Heading from '../Heading';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Hotposts = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <Heading title={'HOT'} icon={<WhatshotIcon sx={{color: 'red'}}/>}/>
    <Box
      fullWidth
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 8
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            position: { xs: 'absolute' },
            zIndex: 100,
          }}
        >
          <IconButton
            sx={{ transform: 'rotate(180deg)' }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Box item key={step.label} sx={{ ml: { md: 6, xs: 0 } }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', sm: 'row', xs: 'column' },
                    width: { md: 'auto', xs: '300' },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: { md: 200 },
                      display: 'block',
                      maxWidth: 'fit-content',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />

                  <Box
                    sx={{
                      width: { md: '80%', xs: '100%' },
                      p: 1,
                      pl: { md: 3, xs: 1 },
                      pt: 0,
                    }}
                  >
                    <Typography
                      sx={{ width: { md: '90%' } , color: 'black', '&:hover': { textDecoration: 'underline'}}}
                      variant="h5"
                    >
                      <IconButton sx={{ mr: 1 }}>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <Link href="/">
                        <a>
                          My First Blog Posts --- The JS Course
                        </a>
                      </Link>
                    </Typography>
                    <Button onClick={() => router.push('/blog/news')} variant='contained' sx={{p: 0, fontSize: 10, fontWeight: 400}}>Category</Button>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        color: 'gray',
                        maxWidth: { md: '90%' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>

                    <Button
                      sx={{ mt: 2 }}
                      endIcon={<ArrowForwardIcon />}
                      variant="outlined"
                    >
                      Read more
                    </Button>
                  </Box>
                </Box>
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            position: 'absolute',
            right: 0,
            ml: 1,
          }}
        >
          <IconButton
            sx={{ ml: 'auto' }}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Hotposts;
