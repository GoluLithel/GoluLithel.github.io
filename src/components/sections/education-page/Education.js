import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Education() {
    // let border = 'solid white 1px';

    return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin'}}>
        <Box style={{ placeItems: 'center center', width: '100%' }}>
          <h1 style={{ placeItems: 'center center', textAlign:'center', width: '100%'}}>My Education</h1>
        </Box>
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px' }}>
          <Box sx={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '5%', paddingTop: '1%' }}>
            <Box component="h2" sx={{ fontSize: '1.2rem', marginBottom: '5px' }}>M.C.A. (Master of Computer Application)</Box>
            <Box sx={{ fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'right' }}>06/2017 - 06/2020</Box>
            <Box component="p" sx={{ fontSize: '1rem', marginBottom: '0px' }}>
              <a rel="noreferrer" target='_blank' href='https://www.spit.ac.in/'>
                Sardar Patel Institute of Technology, Mumbai
              </a>
            </Box>
            <Box sx={{ fontSize: '0.9rem' }}><strong>Percentage: </strong>78.6% / 100%</Box>
          </Box> 
          <Box sx={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '5%' }}>
            <Box component="h2" sx={{ fontSize: '1.2rem', marginBottom: '5px' }}>B.Sc. (Mathematics, Computer Science & Physics)</Box>
            <Box sx={{ fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'right' }}>07/2014 - 05/2017</Box>
            <Box component="p" sx={{ fontSize: '1rem', marginBottom: '0px' }}>
              <a rel="noreferrer" target='_blank' href='https://hislopcollege.ac.in/'>
                Hislop College, Nagpur
              </a>
            </Box>
            <Box sx={{ fontSize: '0.9rem' }}><strong>Percentage: </strong>73.0% / 100%</Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
    );
}