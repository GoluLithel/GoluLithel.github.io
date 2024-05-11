import Drawer from '@mui/material/Drawer';
import DrawerList from '../drawer/DrawerList';
import DrawerButton from '../drawer/DrawerButton';

export default function DrawerPanel({ open, handleChangePanel, handleDownloadOpen, toggleDrawer, pages }) {
    return (
        <>
            <DrawerButton toggleDrawer={toggleDrawer} />
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <DrawerList
                    handleChangePanel={handleChangePanel}
                    handleDownloadOpen={handleDownloadOpen}
                    toggleDrawer={toggleDrawer}
                    pages={pages} />
            </Drawer>
        </>
    );
}