import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import PostCard from '../../comps/PostCard'

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products',{
  }
  )
  const data = await res.json()
  return {
    props:{
      data: data.products
    }
  }
}

const Blog = ({data}) => {
    return (
        <Container sx={{display: 'flex', alignItems: 'center', mt: 10}}>
        <Grid sx={{display: 'flex', justifyContent: 'center'}} container spacing={4}>
          {data?.map((item) => (
            <Grid key={item.title} sx={{display: 'flex', justifyContent: 'center'}} item xs={12} md={4}>
              <PostCard post={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}
 
export default Blog;