import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import profilePic from '../../../resources/profile-photo.png';
import Introduction from './summary/Introduction';
import AnimatedPic from './display-profile/AnimatedPic';

export default function Home() {
  let border = 'solid white 1px';

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '10vmin'}}>
        <Box sx={{ border: border }} >
          <Grid container>
          <Grid xs={12} sx={{ display: { xs: 'block', sm:'none', md: 'none'}, border: border }}>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
              <AnimatedPic width='50vmin'/>
            </div>
          </Grid>
          <Grid sm={6} md={8} xs={12} sx={{ border: border }}>
            <div style={{ display: 'grid', placeItems: 'center', height: 'calc(100vmin - 33vmin)' }}>
              <Introduction/>
            </div>
          </Grid>
          <Grid sm={6} md={4} sx={{ display: { xs: 'none', sm: 'block', md: 'block'}, border: border }}>
            <div style={{ display: 'grid', placeItems: 'center end', height: 'calc(100vmin - 33vmin)' }}>
              <AnimatedPic width='100%'/>
            </div>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}