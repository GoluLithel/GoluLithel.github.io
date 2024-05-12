import * as React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ContactInfo from './ContactInfo';
import { Button } from '@mui/material';
import handleWhatsAppPing from '../../../utils/handleWhatsAppPing';

export default function Contacts() {
  let border = 'solid white 1px';

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ padding: '5vmin', minHeight: '100vh' }}>
        <Box style={{ placeItems: 'center center', width: '100%' }}>
          <h1 style={{ placeItems: 'center center', textAlign: 'center', width: '100%' }}>Contact Details</h1>
        </Box>
        <Box sx={{ maxWidth: 900, margin: 'auto', padding: '20px', border: border }}>
          <ContactInfo />
        </Box>
        <Box style={{ placeItems: 'center center', width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <strong style={{ fontSize: '2.2rem' }}>Follow Me: </strong>&nbsp;&nbsp;&nbsp;
          <a rel="noreferrer" target='_blank' href='https://www.facebook.com/bhogendra.kamble'>
            <FaFacebook style={{ fontSize: '2rem' }} />
          </a>&nbsp;&nbsp;&nbsp;
          <a rel="noreferrer" target='_blank' href='https://www.instagram.com/bhogendra_kamble/'>
            <FaInstagram style={{ fontSize: '2rem' }} />
          </a>
        </Box>
        <Box style={{ placeItems: 'center center', width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <Button onClick={handleWhatsAppPing} variant="contained" color="success" sx={{ fontSize: '1.2rem' }}>Ping Me&nbsp;&nbsp;<FaWhatsapp /></Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}