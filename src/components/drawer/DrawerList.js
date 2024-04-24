import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import ShareIcon from '@mui/icons-material/Share';
import resumeUrl from '../../resources/resume/resume.pdf';

export default function DrawerList({ handleChangePanel, toggleDrawer, pages }) {

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
        {pages.map(([text, icon]) => {
          const changePanel = ()=> {handleChangePanel(text)};
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={changePanel}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <a href={resumeUrl} style={{textDecoration:'none', color: 'inherit' }} download="Resume_BhogendraKamble.pdf">
          <ListItem key="Download Resume" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FileDownloadIcon />
              </ListItemIcon>
              <ListItemText primary="Download Resume" />
            </ListItemButton>
          </ListItem>
        </a>
        {/* <ListItem key="Share" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Share" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );
}