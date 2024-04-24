import * as React from 'react';
import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/nav-bar/ResponsiveAppBar';
import CurrentSection from './components/sections/CurrentSection';
import DownloadDialog from './components/pop-ups/DownloadDialog';
import GratitudeDialog from './components/pop-ups/GratitudeDialog';

function App() {

  const [activePanel, setActivePanel] = useState('Home');
  const [openDownload, setOpenDownload] = React.useState(false);
  const [openGratitude, setOpenGratitude] = React.useState(false);

  const handleChangePanel = (panel) => {
    setActivePanel(panel);
  }; 

  const handleDownloadOpen = () => {
    setOpenDownload(true);
  };

  const handleDownloadClose = () => {
    setOpenDownload(false);
  };

  const handleGratitudeOpen = () => {
    setOpenGratitude(true);
  };

  const handleGratitudeClose = () => {
    setOpenGratitude(false);
  };

  return (
    <>
      <ResponsiveAppBar 
        activePanel={activePanel}
        openDownload={openDownload}
        handleChangePanel={handleChangePanel}
        handleDownloadOpen={handleDownloadOpen}
        handleGratitudeOpen={handleGratitudeOpen}
      />
      <CurrentSection activePanel={activePanel}/>
      <DownloadDialog open={openDownload} handleDownloadClose={handleDownloadClose}/>
      <GratitudeDialog open={openGratitude} handleGratitudeClose={handleGratitudeClose} handleChangePanel={handleChangePanel}/>
    </>
  );
}

export default App;
