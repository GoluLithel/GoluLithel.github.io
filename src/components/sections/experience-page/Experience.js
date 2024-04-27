import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Experience() {
    let border = 'solid white 1px';

    return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin', minHeight: '100vh'}}>
        <Box style={{ placeItems: 'center center', width: '100%' }}>
          <h1 style={{ placeItems: 'center center', textAlign:'center', width: '100%'}}>Work Experience</h1>
        </Box>
        <Box sx={{ border: border, maxWidth: 800, margin: 'auto', padding: '20px' }}>
          <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
            <Box component="h2" sx={{ fontSize: '1.2rem', marginBottom: '10px' }}>IBM India Pvt Ltd,<br/>Application Developer, Pune</Box>
            <Box sx={{ fontSize: '0.9rem' }}>04/2021 - Present</Box>
          </Box>
          <Box>
            <ul sx={{ paddingInlineStart: '20px', marginBlockStart: '5px', marginBlockEnd: '10px' }}>
              <li>Developed RESTful APIs, facilitating smooth interactions between UI, Blockchain, and Database using Node.js, NestJS, Express.js, and MongoDB.</li>
              <li>Designed and implemented unified codebase with microservices architecture, reducing coding lines by 47%.</li>
              <li>Implemented server-side rendering using Node.js frameworks.</li>
              <li>Designed and created user-friendly UI pages with React.js to utilize Node.js for server-side scripting and asynchronous programming, enabling real-time data processing and event-driven functionality.</li>
            </ul>
          </Box>
          <br/>
          <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px', marginTop: '20px' }}>
            <Box component="h2" sx={{ fontSize: '1.2rem', marginBottom: '10px' }}>Fractal India Pvt Ltd,<br/>Project Intern, Mumbai</Box>
            <Box sx={{ fontSize: '0.9rem' }}>01/2020 - 07/2020</Box>
          </Box>
          <Box>
            <ul sx={{ paddingInlineStart: '20px', marginBlockStart: '5px', marginBlockEnd: '10px' }}>
              <li>Built project on Invoice Digitization, streaming data extraction from digital invoices to enhance organizational efficiency in reconciliation processes.</li>
              <li>Implemented Deep Learning and NLP techniques to classify and extract data from invoices.</li>
              <li>Used Google Cloud Vision API for text extraction and OCR from PDFs.</li>
              <li>Automated basic tasks using Batch Scripting and developed documentation bots in RPA (Workfusion) to streamline reconciliation process.</li>
              <li>Enhanced data pre-processing with Excel Macros (VB scripts) and Regular Expressions, optimizing data extraction and formatting from text sources.</li>
            </ul>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
    );
}