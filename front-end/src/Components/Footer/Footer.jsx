import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography ml={20} variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link   color="inherit" href="">
      Allen Digital  Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '355px',
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:"#b1b3db"
        }}
      >
        <Container maxWidth="sm">
          <Typography textAlign={"center"} variant="body1">
          © Allen Digital Pvt. Ltd. 2019-2022
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}