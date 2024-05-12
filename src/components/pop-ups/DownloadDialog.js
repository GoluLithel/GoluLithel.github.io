import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function DownloadDialog({ isDownloadPopUp, toggleDownloadPopup }) {
  return (
    <Dialog
      open={isDownloadPopUp}
      onClose={toggleDownloadPopup}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Thank you for your interest!<br />Your download has started successfully.
      </Alert>
    </Dialog>
  );
}