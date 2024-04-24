import Typography from '@mui/material/Typography';

export default function NameHeading({handleChangePanel}) {
    return (
        <Typography
            onClick={handleChangePanel.bind(null, 'Home')}
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
            BHOGENDRA
          </Typography>
    );
}