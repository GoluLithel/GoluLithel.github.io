import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MenuButtons({pages, activePanel, handleChangePanel}) {

    return (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Button
        variant={(page===activePanel)?'contained': ''}
        key={page}
        onClick={handleChangePanel.bind(null, page)}
        sx={{ my: 2, color: 'white', display: 'block', backgroundColor: (page===activePanel)?'#2E88E0': 'primary' }}
      >
        {page}
      </Button>
    ))}
  </Box>);
}