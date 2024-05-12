import { useState } from 'react';
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
import './ResponsiveAppBar.css';
import SuccessDialog from '../pop-ups/SuccessDialog';
import GratitudeDialog from '../pop-ups/GratitudeDialog';
import ShareDialog from '../pop-ups/ShareDialog';

const pages = [
  ['Home', <HomeIcon />],
  ['Experience', <ElderlyIcon />],
  ['Skills', <HandymanIcon />],
  ['Education', <SchoolIcon />],
  ['Certificates', <WorkspacePremiumIcon />],
  ['Projects', <FeaturedPlayListIcon />],
  ['Contacts', <CallIcon />],
];

function ResponsiveAppBar({ activePanel, handleChangePanel }) {

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSuccessPopUp, setSuccessPopUp] = useState(false);
  const [isGratitudePopUp, setGratitudePopUp] = useState(false);
  const [isSharePopUpOpen, setSharePopUp] = useState(false);

  const toggleSuccessPopUp = () => setSuccessPopUp(!isSuccessPopUp);
  const toggleGratitudePopup = () => setGratitudePopUp(!isGratitudePopUp);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const toggleSharePopUp = () => setSharePopUp(!isSharePopUpOpen);

  const drawerProps = { isDrawerOpen, handleChangePanel, toggleSuccessPopUp, toggleDrawer, toggleSharePopUp, pages };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* This will display if screen is large */}
            <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 1 }}>
              <DrawerPanel {...drawerProps} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 2 }} onClick={toggleGratitudePopup}>
              <EmojiEmotionsIcon className='spin-animation' />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 3 }} onClick={() => handleChangePanel('Home')}>
              <NameHeading>BHOGENDRA</NameHeading>
            </Box>
            <MenuButtons pages={pages} activePanel={activePanel} handleChangePanel={handleChangePanel} />

            {/* This will display if screen is small */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }}>
              <DrawerPanel {...drawerProps} />
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none' }, mr: 1 }} onClick={toggleGratitudePopup}>
              <EmojiEmotionsIcon className='spin-animation' />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' }, mr: 2 }} onClick={() => handleChangePanel('Home')}>
              <NameHeading>BHOGENDRA</NameHeading>
            </Box>

            {/* This will display if screen is small & large */}
            <Box sx={{ flexGrow: 0 }} >
              <ProfileAvatar handleChangePanel={handleChangePanel} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SuccessDialog isOpen={isSuccessPopUp} togglePopUp={toggleSuccessPopUp}>
        Thank you for your interest!<br />
        Your download has started successfully.
      </SuccessDialog>
      <ShareDialog isSharePopUpOpen={isSharePopUpOpen} toggleSharePopUp={toggleSharePopUp} />
      <GratitudeDialog isGratitudePopUp={isGratitudePopUp} toggleGratitudePopup={toggleGratitudePopup} handleChangePanel={handleChangePanel} />
    </>
  );
}
export default ResponsiveAppBar;