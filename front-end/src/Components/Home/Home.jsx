import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import City from '../Branches/Branch'


export default function Home() {
  return <>
  <Box sx={{ "margin":"auto" , "width":"650px" , "marginTop":"50px" , color:"#6e71cc" }}>  <Typography variant='h4'> please do visite on our any  branch </Typography></Box>
    <City/>
  </>
}
