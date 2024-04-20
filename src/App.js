import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './components/nav-bar/ResponsiveAppBar';
import CurrentSection from './components/sections/CurrentSection';
// import FullWidthTabs from './components/FullWidthTabs';

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <CurrentSection section='Home'/>
      {/* <FullWidthTabs/> */}
    </>
  );
}

export default App;
