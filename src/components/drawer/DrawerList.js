import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import resumeUrl from '../../resources/resume/resume.pdf';
import { handleShareResume, handleShareLink } from '../../utils/handleShare';
import DrawerItem from './drawer-items/DrawerItem';

export default function DrawerList({ handleChangePanel, handleDownloadOpen, toggleDrawer, pages }) {

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        <DrawerItem text="Bhogendra" onClickItem={() => handleChangePanel('PersonalProfile')}>
          <Avatar src={avatarImage} />
        </DrawerItem>
      </List>
      <Divider />
      <List>
        {pages.map(([text, icon]) => {
          return (
            <DrawerItem text={text} onClickItem={() => handleChangePanel(text)}>
              {icon}
            </DrawerItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <a href={resumeUrl} style={{ textDecoration: 'none', color: 'inherit' }} download="Resume_BhogendraKamble.pdf">
          <DrawerItem text="Download Resume" onClickItem={handleDownloadOpen}>
            <FileDownloadIcon />
          </DrawerItem>
        </a>
        <DrawerItem text="Share Resume" onClickItem={handleShareResume}>
          <ShareIcon />
        </DrawerItem>
        <DrawerItem text="Share Link" onClickItem={handleShareLink}>
          <ShareIcon />
        </DrawerItem>
      </List>
    </Box>
  );
}