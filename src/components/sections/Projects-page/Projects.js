import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Projects() {
    let border = 'solid white 1px';

    return (
      <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin', minHeight: '100vh'}}>
        <Box style={{ placeItems: 'center center', width: '100%' }}>
          <h1 style={{ placeItems: 'center center', textAlign:'center', width: '100%'}}>My Projects</h1>
        </Box>
        <Box sx={{ border: border, maxWidth: 800, margin: 'auto', padding: '20px' }}>
          <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
            <Box component="h1" sx={{ fontSize: '1.5rem', marginBottom: '10px' }}>Personal Portfolio</Box>
            <Box sx={{ fontSize: '0.9rem', marginBottom:'10px' }}><strong>Technology used:</strong> React.js, Material UI components, JSX, CSS, and JavaScript.</Box>
            <Box sx={{ fontSize: '0.9rem' }}>
              <a rel="noreferrer" target='_blank' href='https://golulithel.github.io/'>
                Explore My Portfolio Here.
              </a>
              &#128072;
            </Box>
            <Box sx={{ fontSize: '0.9rem' }}>
              <a rel="noreferrer" target='_blank' href='https://github.com/GoluLithel/GoluLithel.github.io/'>
                View Source Code.
              </a>
              &#128072;
            </Box>
          </Box>
          <Box>
            <ul sx={{ paddingInlineStart: '20px', marginBlockStart: '5px', marginBlockEnd: '10px' }}>
              <li>Utilizes React to create a website that adapts seamlessly to various devices and screen sizes.</li>
              <li>Showcases mastery in design principles, offering an intuitive user interface for enhanced user experience.</li>
              <li>Organized into sections like Experience, Skills, Projects, Certificates, Education, Personal Profile, and Contacts, highlighting diverse aspects of professional accomplishments.</li>
              <li>Demonstrates a deep understanding of React's component-based architecture, reflecting proficiency in React concepts.</li>
              <li>Skillfully communicates professional achievements and expertise, enhancing engagement and credibility.</li>
            </ul>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
    );
}