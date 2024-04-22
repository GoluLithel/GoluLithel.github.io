import * as React from 'react';
import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/nav-bar/ResponsiveAppBar';
import CurrentSection from './components/sections/CurrentSection';

function App() {

  const [activePanel, setActivePanel] = useState('Home');

  const handleChangePanel = (panel) => {
    setActivePanel(panel);
  }; 

  return (
    <>
      <ResponsiveAppBar activePanel={activePanel} handleChangePanel={handleChangePanel} />
      <CurrentSection activePanel={activePanel}/>
    </>
  );
}

export default App;
