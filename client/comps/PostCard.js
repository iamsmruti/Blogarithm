import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepPurple, orange, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Paper } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Box } from '@mui/system';

export default function PostCard({post}) {
  const router = useRouter()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        className='glassMorphism'
        sx={{}}
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[500], width: 40, height: 40 }} aria-label="recipe">
            {post.title[0]}
          </Avatar>
        }
        title={'By Smruti Ranjan Badatya'}
        subheader={`Last Updated 20th June 2022`}
      />
      <CardMedia
        onClick={() => router.push('/login')}
        sx={{ zIndex: 1, cursor: 'pointer'}}
        component="img"
        height="194"
        image={post.images[0]}
        alt="Paella dish"
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Paper elevation={0} sx={{width: 'fit-content', bgcolor: orange[500], pl: 1, pr: 1, color: 'white'}}>
            {post.category}
          </Paper>
        </Box>
        <Typography variant="h6">
          <Link href="/login">
            <a>{post.title}</a>
          </Link>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}

        <Link href={`/blog/${post.id}`}>
          <a>
          <Button variant='outlined' sx={{textTransform: 'capitalize', ml: 'auto', mt: 'auto'}}>
              Read More
          </Button>
        </a>
        </Link>
      </CardActions>
    </Card>
  );
}
