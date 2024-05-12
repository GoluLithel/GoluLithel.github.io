import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SuccessDialog({ isOpen, togglePopUp, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={togglePopUp}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        {children}
      </Alert>
    </Dialog>
  );
}