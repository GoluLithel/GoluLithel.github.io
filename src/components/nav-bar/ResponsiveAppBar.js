import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ProfileAvatar from './ProfileAvatar';
import MenuButtons from './MenuButtons';
import DrawerPanel from '../drawer/DrawerPanel';
import NameHeading from './NameHeading';

const pages = ['Home', 'Experience', 'Skills', 'Education', 'Certificates', 'Projects', 'Contacts'];

function ResponsiveAppBar({activePanel, handleChangePanel}) {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* This will display if screen is large */}
          <Box sx={{ display: { xs: 'none', sm:'flex', md: 'flex' }, mr: 1 }}>
            <DrawerPanel open={open} activePanel={activePanel} handleChangePanel={handleChangePanel} toggleDrawer={toggleDrawer} pages={pages}/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm:'flex', md: 'flex' }, mr: 2 }} >
            <EmojiEmotionsIcon/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm:'flex', md: 'flex' }, mr: 3 }}>
            <NameHeading handleChangePanel={handleChangePanel}/>
          </Box>
          <MenuButtons pages={pages} activePanel={activePanel} handleChangePanel={handleChangePanel}/>

          {/* This will display if screen is small */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm:'none', md: 'none' }}}>
            <DrawerPanel open={open} activePanel={activePanel} handleChangePanel={handleChangePanel} toggleDrawer={toggleDrawer} pages={pages}/>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm:'none', md: 'none' }, mr: 1 }}>
            <EmojiEmotionsIcon/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm:'none', md: 'none' }, mr: 2 }}>
            <NameHeading handleChangePanel={handleChangePanel}/>
          </Box>

          {/* This will display if screen is small & large */}
          <Box sx={{ flexGrow: 0 }} >
            <ProfileAvatar handleChangePanel={handleChangePanel}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  );
}
export default ResponsiveAppBar;