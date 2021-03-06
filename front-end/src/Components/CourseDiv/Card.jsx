import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Card({name}) {
    const {city} = useParams()
    
     const handleClick = (name)=>{

      localStorage.setItem("ragistration" , JSON.stringify(name))
     }

    return ( 
    <Box m={3} sx={{"height":"400px" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , textAlign:"center" , "width":"300px"   , "borderRadius":"10px"}}>
    <Box sx={{"height":"150px" ,"textAlign":"center" , "borderRadius":"10px", "backgroundColor":"#6e71cc"}}><img src="https://dashboard.masaischool.com/static/media/course-card-background.b6e2a866.png" alt="" /><Typography sx={{"marginTop":"-40px" , "fontWeight":"700" , "color":"white"}} variant='h5'>{name.Course}</Typography> </Box>
     <Box mt={2}> <Typography variant='h6'>Starts: 25 Jul 2022</Typography>
      <img style={{marginTop:"-20px" , marginBottom:"-20px"}} src="https://www.masaischool.com/img/homepage/scribble.png" alt="" /></Box>
     <Typography variant='h7'>Timing - {name.batch_start}  --  {name.batch_end}</Typography> 
     <Typography mt={1}  variant='h5'>Totle Fee -  {name.Fee} <s style={{fontSize:"15px" }}>Discount 30%</s></Typography> 
     <Typography mt={1} variant='h6'> Batch Strangth -  {name.capacity}</Typography> 


     <Link style={{textDecoration:"none"}} to={`/${city}/Ragistration`}><Button onClick={()=>{
      handleClick(name)
     }} sx={{ marginTop:"20px" }} variant='outlined'> Apply</Button></Link>
    </Box>
  )
}
