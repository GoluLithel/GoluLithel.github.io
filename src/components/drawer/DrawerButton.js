import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerButton({ toggleDrawer }) {
    return (
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
    );
}