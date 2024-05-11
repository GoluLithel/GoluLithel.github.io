import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';

export default function ProfileAvatar({ handleChangePanel }) {
    return (
        <Tooltip TransitionComponent={Zoom} title="Personal Profile" arrow>
            <IconButton
                sx={{ p: 0 }}
                onClick={() => handleChangePanel('PersonalProfile')}
            >
                <Avatar src={avatarImage} />
            </IconButton>
        </Tooltip>
    );
}