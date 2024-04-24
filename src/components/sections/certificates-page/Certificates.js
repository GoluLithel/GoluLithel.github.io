import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import awsLogo from '../../../resources/certificates-logo/awsLogo.png';
import cbdeLogo from '../../../resources/certificates-logo/cbdeLogo.png';

export default function Certificates() {
    // let border = 'solid white 1px';

    return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin'}}>
        <Box style={{ placeItems: 'center center', width: '100%' }}>
          <h1 style={{ placeItems: 'center center', textAlign:'center', width: '100%'}}>My Certificates</h1>
        </Box>
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '5%' }}>
            <img src={awsLogo} alt="AWS Certified Cloud Practitioner Logo" style={{ width: '100px', marginRight: '20px' }} />
            <Box sx={{paddingLeft: '5%'}}>
              <Box component="h3" sx={{ fontSize: '1rem', marginBottom: '5px' }}>AWS Certified Cloud Practitioner</Box>
              <Box sx={{ fontSize: '0.9rem' }}>Amazon Web Services (AWS)</Box>
              <Box sx={{ fontSize: '0.9rem' }}>Issued Aug 2023 - Expires Aug 2026</Box>
              <p><a href='https://cp.certmetrics.com/amazon/en/public/verify/credential/QF2RE67K4EB1QCCR' rel="noreferrer" target='_blank'>Click to Validate</a>. &#128072;</p>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '5%' }}>
            <img src={cbdeLogo} alt="CBDE Logo" style={{ width: '100px', marginRight: '20px' }} />
            <Box sx={{paddingLeft: '5%'}}>
              <Box component="h3" sx={{ fontSize: '1rem', marginBottom: '5px' }}>BTA - Certified Blockchain Developer - Ethereum (CBDE)</Box>
              <Box sx={{ fontSize: '0.9rem' }}>Blockchain Training Alliance</Box>
              <Box sx={{ fontSize: '0.9rem' }}>Issued Jul 2022 - Expires Jul 2024</Box>
              <p><a href='https://www.btacertified.com/dlink/cb0515d7ef6ebcda8a1f0b17f2cdcd3b7bd382b6c5e5f381e1799c99cf1df0ed/certdisplayhash' rel="noreferrer" target='_blank'>Click to Validate</a>. &#128072;</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
    );
}