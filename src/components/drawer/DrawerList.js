import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';

export default function DrawerList({ activePanel, handleChangePanel, toggleDrawer, pages }) {

  const setPanelPersonalProfile = () => {
    return handleChangePanel('PersonalProfile');
  };

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="BHOGENDRA" onClick={setPanelPersonalProfile} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar src={avatarImage} />
            </ListItemIcon>
            <ListItemText primary="BHOGENDRA" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {pages.map((text, index) => {
          const changePanel = ()=> {handleChangePanel(text)};

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={changePanel}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem key="Download Resume" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Download Resume" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}