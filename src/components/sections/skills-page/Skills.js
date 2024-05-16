import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { skillSet } from '../../../data/skillSet';

export default function Skills() {
  let border = '';

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ padding: '5vmin', minHeight: '100vh', width: '90%' }}>
        <Grid container>
          <Grid md={12} sm={12} xs={12} sx={{ display: { xs: 'block', sm: 'block', md: 'block' }, border: border }}>
            <Box style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
              <h1>Skills</h1>
            </Box>
          </Grid>

          {skillSet.map((element) => (
            <Grid md={2} sm={3} xs={4} sx={{ display: 'block', border: border }}>
              <Box sx={{
                display: 'grid',
                border: border,
                borderRadius: '15%',
                placeItems: 'center center',
                backgroundColor: '#f8f8f8',
                margin: '8%',
                width: '90%',
                aspectRatio: '1/1',
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
                padding: '5%',
              }}>
                <img style={{ width: '45%', border: border, placeItems: 'center center' }} src={element[1]} alt={element[0]} />
                <p style={{ textAlign: 'center' }}>{element[0]}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}