import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AnimatedPic from '../common-page-component/display-profile/AnimatedPic';
import PersonalInfo from './PersonalInfo';

export default function PersonalProfile() {
  let border = 'solid white 1px'; // Just for dubugging design

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '10vmin'}}>
        <Box sx={{ border: border }} >
          <Grid container>
            <Grid xs={12} sx={{ display: { xs: 'block', sm:'block', md: 'none'}, border: border }}>
              <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
                <AnimatedPic width='50vmin'/>
              </div>
            </Grid>
            <Grid xs={12} sx={{ display: { xs: 'block', sm:'block', md: 'block'}, border: border }}>
              <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
                <h2>Personal Profile</h2>
              </div>
            </Grid>
            <Grid md={8} xs={12} sx={{ border: border }}>
              <div style={{ display: 'grid', placeItems: 'center' }}>
                <PersonalInfo/>
              </div>
            </Grid>
            <Grid  md={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block'}, border: border }}>
              <div style={{ display: 'grid', placeItems: 'start start' }}>
                <AnimatedPic width='45vmin'/>
              </div>
            </Grid>
            <Grid xs={12} sx={{ display: { xs: 'block', sm:'block', md: 'block'}, border: border }}>
              <div style={{ display: 'grid', placeItems: 'center center', width: '100%', textAlign: 'center' }}>
                <h4><i>Dedicated and adaptable individual with a proactive approach, known for swiftly mastering new skills and delivering efficient results through hard work and strategic thinking</i></h4>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}