import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MenuButtons({ pages, activePanel, handleChangePanel }) {

  return (<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
    {pages.map(([page, icon], index) => (
      <Button
        variant={(page === activePanel) ? 'contained' : ''}
        key={page}
        onClick={() => handleChangePanel(page)}
        sx={{ my: 2, color: 'white', display: { sm: (index >= 3) ? 'none' : 'flex', md: (index >= 5) ? 'none' : 'flex', lg: 'flex' }, backgroundColor: (page === activePanel) ? '#2E88E0' : 'primary' }}
      >
        {page}
      </Button>
    ))}
  </Box>);
}