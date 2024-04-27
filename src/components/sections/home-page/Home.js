import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Introduction from './summary/Introduction';
import AnimatedPic from '../common-page-component/display-profile/AnimatedPic';
import Projects from '../Projects-page/Projects';
import Certificates from '../certificates-page/Certificates';
import Contacts from '../contacts-page/Contacts';
import Education from '../education-page/Education';
import Experience from '../experience-page/Experience';
import PersonalProfile from '../personal-profile-page/PersonalProfile';
import Skills from '../skills-page/Skills';

export default function Home() {
  let border = '';

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '10vmin', minHeight: '100vh', border: border}}>
        <Box sx={{ border: border }} >
          <Grid container>
          <Grid md={12} sm={12} xs={12} sx={{ display: { sm:'block', md: 'none'}, border: border }}>
            <Box style={{ display: 'grid', placeItems: 'center center', width: '100%' }}>
              <AnimatedPic width='50%'/>
            </Box>
          </Grid>
          <Grid md={12} sm={12} xs={12}>
              <Grid container sx={{ border: border, height: '100%' }}>
                <Grid md={8} sm={12} xs={12} sx={{border: border, height: '100%' }}>
                  <Box style={{ display: 'grid', placeItems: 'center center', height: '100%', border: border}}>
                    <Introduction/>
                  </Box>
                </Grid>
                <Grid md={4} sm={12} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block'}, border: border, placeItems: 'center center', height: '100%'}}>
                  <Box style={{ display: 'grid', border: border, placeItems: 'center center', height: '100%'}}>
                    <AnimatedPic width='100%'/>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
    <Experience/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Education/>
    <PersonalProfile/>
    <Contacts/>
    </>
  );
}