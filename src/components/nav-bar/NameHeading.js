import Typography from '@mui/material/Typography';

export default function NameHeading({ children }) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: '1.5rem',
        letterSpacing: '.15rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {children}
    </Typography>
  );
}