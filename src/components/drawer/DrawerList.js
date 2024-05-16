import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../assets/profile-photo.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import DrawerItem from './drawer-items/DrawerItem';
import handleDownload from '../../utils/handleDownload';

export default function DrawerList({ handleChangePanel, toggleSuccessPopUp, toggleDrawer, toggleSharePopUp, pages }) {

  const handleDownloadClick = () => {
    handleDownload();
    toggleSuccessPopUp();
  }

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <DrawerItem text="Bhogendra" onClickItem={() => handleChangePanel('PersonalProfile')}>
          <Avatar src={avatarImage} />
        </DrawerItem>
      </List>
      <Divider />
      <List>
        {pages.map(([text, icon]) => {
          return (<DrawerItem text={text} onClickItem={() => handleChangePanel(text)}>{icon}</DrawerItem>);
        })}
      </List>
      <Divider />
      <List>
        <DrawerItem text="Download Resume" onClickItem={handleDownloadClick}>
          <FileDownloadIcon />
        </DrawerItem>
        <DrawerItem text="Share" onClickItem={toggleSharePopUp}>
          <ShareIcon />
        </DrawerItem>
      </List>
    </Box>
  );
}