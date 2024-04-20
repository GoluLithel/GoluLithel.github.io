import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Drawer from '@mui/material/Drawer';
import DrawerList from './DrawerList';


const pages = ['Home', 'Experience', 'Education', 'Skills', 'Certificates', 'Projects', 'Contacts'];
const headingCSS = {
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.5rem',
  letterSpacing: '.15rem',
  color: 'inherit',
  textDecoration: 'none',
};

function ResponsiveAppBar() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <DrawerList toggleDrawer={toggleDrawer} pages={pages}/>
            </Drawer>
          </Box>
          <EmojiEmotionsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              ...headingCSS,
            }}
          >
            BHOGENDRA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <DrawerList toggleDrawer={toggleDrawer} pages={pages}/>
            </Drawer>
          </Box>
          <EmojiEmotionsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              ...headingCSS,
            }}
          >
            BHOGENDRA
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar src={avatarImage} />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  );
}
export default ResponsiveAppBar;