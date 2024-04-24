import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AnimatedPic from '../common-page-component/display-profile/AnimatedPic';
import PersonalInfo from './PersonalInfo';

export default function PersonalProfile() {
  let border = ''; // Just for dubugging design

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin', border: border}}>
        <Box sx={{ border: border }} >
          <Grid container>
            <Grid md={12} sm={12} xs={12} sx={{ display: { sm:'block', md: 'none'}, border: border }}>
              <Box style={{ display: 'grid', placeItems: 'center center', width: '100%' }}>
                <AnimatedPic width='50%'/>
              </Box>
            </Grid>
            <Grid md={12} sm={12} xs={12} sx={{ display: { xs: 'block', sm:'block', md: 'block'}, border: border }}>
              <Box style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
                <h2>Personal Profile</h2>
              </Box>
            </Grid>
            <Grid md={12} sm={12} xs={12}>
              <Grid container sx={{ border: border, height: '100%' }}>
                <Grid md={7} sm={12} xs={12} sx={{border: border, height: '100%' }}>
                  <Box style={{ display: 'grid', placeItems: 'center center', height: '100%', border: border}}>
                    <PersonalInfo/>
                  </Box>
                </Grid>
                <Grid md={4} sm={12} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block'}, border: border, placeItems: 'center center', height: '100%'}}>
                  <Box style={{ display: 'grid', border: border, placeItems: 'center center', height: '100%'}}>
                    <AnimatedPic width='100%'/>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={12} sm={12} xs={12} sx={{ border: border, placeItems: 'center center', width: '100%'}}>
              <Box style={{ display: 'grid', border: border, placeItems: 'center center', width: '100%'}}>
                <br/>
                <p style={{ display: 'grid', border: border, placeItems: 'center center', width: '80%', textAlign: 'center' }}><i>"Dedicated and adaptable individual with a proactive approach, known for swiftly mastering new skills and delivering efficient results through hard work and strategic thinking"</i></p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}