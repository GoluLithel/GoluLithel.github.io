import Drawer from '@mui/material/Drawer';
import DrawerList from '../drawer/DrawerList';
import DrawerButton from '../drawer/DrawerButton';

export default function DrawerPanel({open, activePanel, handleChangePanel, toggleDrawer, pages}) {
    return (
        <>
            <DrawerButton toggleDrawer={toggleDrawer} />
                <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList activePanel={activePanel} handleChangePanel={handleChangePanel} toggleDrawer={toggleDrawer} pages={pages}/>
            </Drawer>
        </>
    );
}