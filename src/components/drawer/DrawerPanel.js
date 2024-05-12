import Drawer from '@mui/material/Drawer';
import DrawerList from '../drawer/DrawerList';
import DrawerButton from '../drawer/DrawerButton';

export default function DrawerPanel({ isDrawerOpen, handleChangePanel, toggleDownloadPopup, toggleDrawer, pages }) {
    return (
        <>
            <DrawerButton toggleDrawer={toggleDrawer} />
            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <DrawerList
                    handleChangePanel={handleChangePanel}
                    toggleDownloadPopup={toggleDownloadPopup}
                    toggleDrawer={toggleDrawer}
                    pages={pages} />
            </Drawer>
        </>
    );
}