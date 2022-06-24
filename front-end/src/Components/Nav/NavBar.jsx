import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link} from "react-router-dom"

export default function NavBar() {
  return (
    <AppBar position="relative">
        <Toolbar sx={{backgroundColor:"#6e71cc"}}>
          <Typography variant="h6" color="inherit" noWrap>
           Allen Institution
          </Typography>
     <Link style={{"marginLeft":"80%" , textDecoration:"none"}} to={"/admin"}><Button sx={{ "backgroundColor":"teal"}} variant='contained'>Are U An Admin </Button></Link>
        </Toolbar>
      </AppBar>
  )
}
