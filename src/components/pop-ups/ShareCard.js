import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function ShareCard({ onClick, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid md={6} sm={6} xs={6} sx={{ display: 'block', placeItems: 'center center' }}>
      <Box
        sx={{
          display: 'grid',
          borderRadius: '15%',
          placeItems: 'center center',
          backgroundColor: isHovered ? '#f8f8f8' : 'white',
          width: '90%',
          margin: '5%',
          aspectRatio: '1/1',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
          padding: '5%',
        }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Box>
    </Grid>
  );
}