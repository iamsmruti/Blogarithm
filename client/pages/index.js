import { Container } from '@mui/system'
import Hotposts from '../comps/Sections/Hotposts'
import MainSection from '../comps/Sections/MainSection'
import Section3 from '../comps/Sections/Section3'
import { useState } from 'react'
import Section2 from '../comps/Sections/Section2'
import Section1 from '../comps/Sections/Section1'
import { Grid } from '@mui/material'
import SideSection from '../comps/Sections/SideSection'
import Categories from '../comps/Sections/Categories'
import Heading from '../comps/Heading'

export default function Home({data}) {
  const [main, setMain] = useState([])
  const [hot, setHot] = useState([])
  const [recent, setRecent] = useState([])
  const [mostRead, setMostRead] = useState([])
  const [featured, setFeatured] = useState([])

  return (
    <Container sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center',mt: 10}}>
      <MainSection />
      <Hotposts />

      <Heading title={'RECENT'}/>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} sm={6}>
          <Section2 />
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <SideSection title={'Most Read'}/>
          <SideSection title={'Featured Posts'}/>
        </Grid>
      </Grid>

      <Heading title={'TRENDING'}/>
      <Section3 />

      <Heading title={'MOST LIKED'}/>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} sm={6}>
          <Section1 />
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <Categories />
        </Grid>
      </Grid>
    </Container>
  )
}
