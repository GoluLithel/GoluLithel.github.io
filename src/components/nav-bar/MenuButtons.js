import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MenuButtons({ pages, activePanel, handleChangePanel }) {

  return (<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
    {pages.map(([page], index) => (
      <Button
        variant={(page === activePanel) ? 'contained' : 'text'}
        key={index}
        onClick={() => handleChangePanel(page)}
        sx={{
          color: 'white',
          display: {
            sm: (index >= 3) ? 'none' : 'flex',
            md: (index >= 5) ? 'none' : 'flex', lg: 'flex'
          },
          backgroundColor: (page === activePanel) ? '#2E88E0' : 'primary'
        }}
      >
        {page}
      </Button>
    ))}
  </Box>);
}