import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Education() {
    let border = 'solid white 1px';

    return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '10vmin'}}>
        <Box sx={{ border: border }} >
            <div style={{ display: 'grid', placeItems: 'center', height: 'calc(100vmin - 33vmin)' }}>
                <h1>Education Section</h1>
            </div>
        </Box>
      </Container>
    </React.Fragment>
    );
}