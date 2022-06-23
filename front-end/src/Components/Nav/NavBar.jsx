import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function NavBar() {
  return (
    <AppBar position="relative">
        <Toolbar sx={{backgroundColor:"#6e71cc"}}>
          <Typography variant="h6" color="inherit" noWrap>
           Allen Institution
          </Typography>
          <Button variant='contained' sx={{"marginLeft":"80%" , "backgroundColor":"teal"}}>Are U An Admin </Button>
        </Toolbar>
      </AppBar>
  )
}
