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
import HomeIcon from '@mui/icons-material/Home';
import ElderlyIcon from '@mui/icons-material/Elderly';
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import CallIcon from '@mui/icons-material/Call';

const pages = [
  ['Home', <HomeIcon/>],
  ['Experience', <ElderlyIcon/>],
  ['Skills', <HandymanIcon/>],
  ['Education', <SchoolIcon/>],
  ['Certificates', <WorkspacePremiumIcon/>],
  [ 'Projects', <FeaturedPlayListIcon/>],
  ['Contacts', <CallIcon/>],
];

function ResponsiveAppBar({activePanel, openDownload, handleChangePanel, handleDownloadOpen, handleGratitudeOpen}) {

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
            <DrawerPanel open={open} openDownload={openDownload} handleChangePanel={handleChangePanel} toggleDrawer={toggleDrawer} pages={pages} handleDownloadOpen={handleDownloadOpen}/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm:'flex', md: 'flex' }, mr: 2 }} onClick={handleGratitudeOpen}>
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
          <Box sx={{ display: { xs: 'flex', sm:'none', md: 'none' }, mr: 1 }} onClick={handleGratitudeOpen}>
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