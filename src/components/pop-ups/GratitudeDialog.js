import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function GratitudeDialog({ isGratitudePopUp, toggleGratitudePopup, handleChangePanel }) {

  const changeToContacts = () => {
    toggleGratitudePopup();
    handleChangePanel('Contacts');
  }

  return (<Dialog
    open={isGratitudePopUp}
    onClose={toggleGratitudePopup}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      😄 Thank you Visitor!!
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={toggleGratitudePopup}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent dividers>
      <Typography gutterBottom>
        Welcome to my personal portfolio!
      </Typography>
      <Typography gutterBottom>
        If you're impressed by what you see, I'd love to chat about how I can bring my skills and expertise to your team.
        Let's create something amazing together! Contact me to discuss potential collaborations and hiring opportunities.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={changeToContacts}>
        Contact Me
      </Button>
    </DialogActions>
  </Dialog>
  );
}