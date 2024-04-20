// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };


// export default function CurrentSection({value, handleChangeIndex}) {
//   const theme = useTheme();
 
//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           <h1>Home</h1>
//           <h1>Home</h1>
//           <h1>Home</h1>
//           <h1>Home</h1>
//           <h1>Home</h1>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//         <h1>fd</h1>
//           <h1>fd</h1>
//           <h1>vfd</h1>
//           <h1>fdvs</h1>
//           <h1>fvbd</h1>
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Education
//         </TabPanel>
//         <TabPanel value={value} index={3} dir={theme.direction}>
//           Skills
//         </TabPanel>
//         <TabPanel value={value} index={4} dir={theme.direction}>
//           Certificates
//         </TabPanel>
//         <TabPanel value={value} index={5} dir={theme.direction}>
//           Projects
//         </TabPanel>
//         <TabPanel value={value} index={6} dir={theme.direction}>
//           Contacts
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }


import Home from './home-page/Home';

export default function CurrentSection({section}) {
    switch (section) {
        case 'Home':
            return (<Home/>);
        default:
            return (<p>Invalid section</p>)
    }
}