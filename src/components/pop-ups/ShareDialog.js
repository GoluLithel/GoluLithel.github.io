import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import resumeIcon from '../../assets/share/resume.png';
import linkIcon from '../../assets/share/link.png';
import Grid from '@mui/material/Grid';
import ShareCard from './ShareCard';
import { handleShareResume, handleShareLink } from '../../utils/handleShare';

export default function ShareDialog({ isSharePopUpOpen, toggleSharePopUp }) {

  let border = 'solid white 1px';

  return (<Dialog
    open={isSharePopUpOpen}
    onClose={toggleSharePopUp}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      <Box sx={{ display: 'grid', placeItems: 'left center' }}>
        <ListItemButton>
          <ListItemIcon>
            <ShareIcon />
          </ListItemIcon>
          <ListItemText primary='Share' />
        </ListItemButton>
      </Box>
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={toggleSharePopUp}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent dividers>
      <Grid sx={{ width: '90%', marginLeft: '5%', marginRigth: '5%', border: border, alignItems: 'center center' }}>
        <Grid container sx={{ width: '100%', border: border }}>
          <ShareCard onClick={handleShareResume}>
            <img style={{ width: '70%', placeItems: 'center center' }} src={resumeIcon} alt='Resume' />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Resume</p>
          </ShareCard>
          <ShareCard onClick={handleShareLink}>
            <img style={{ width: '70%', placeItems: 'center center' }} src={linkIcon} alt='Link' />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Link</p>
          </ShareCard>
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
  );
}