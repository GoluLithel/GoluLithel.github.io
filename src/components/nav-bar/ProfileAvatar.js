import Avatar from '@mui/material/Avatar';
import avatarImage from '../../resources/profile-photo.png';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function ProfileAvatar({handleChangePanel}) {
    return (
        <Box>
            <Tooltip TransitionComponent={Zoom} title="Personal Profile" arrow>
              <IconButton 
                sx={{ p: 0 }}
                onClick={handleChangePanel.bind(null, 'PersonalProfile')}
              >
                <Avatar src={avatarImage} />
              </IconButton>
            </Tooltip>
          </Box>
    );
}