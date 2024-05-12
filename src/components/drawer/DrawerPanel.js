import Drawer from '@mui/material/Drawer';
import DrawerList from '../drawer/DrawerList';
import DrawerButton from '../drawer/DrawerButton';

export default function DrawerPanel({ isDrawerOpen, handleChangePanel, toggleSuccessPopUp, toggleDrawer, toggleSharePopUp, pages }) {
    return (
        <>
            <DrawerButton toggleDrawer={toggleDrawer} />
            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <DrawerList
                    handleChangePanel={handleChangePanel}
                    toggleSuccessPopUp={toggleSuccessPopUp}
                    toggleDrawer={toggleDrawer}
                    toggleSharePopUp={toggleSharePopUp}
                    pages={pages} />
            </Drawer>
        </>
    );
}