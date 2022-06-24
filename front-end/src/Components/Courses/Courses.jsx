import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import Card from '../CourseDiv/Card';
import { Box, Typography , Grid } from '@mui/material';

export default function CityPage() {
    const [state, setstate] = useState([]);
    const {city} = useParams()
  
 
    useEffect(() => {
         axios.get("https://allendigitel.herokuapp.com/institution").then((res)=>setstate([...res.data.filter((el)=>el.Branch === city)]))
    }, [city]);

     
  return <>
  
     <Typography textAlign={"center"} mt={3} variant='h4'>Our batches for IIT / NEET / 12th Foundation & JEE With different time slots </Typography>
     <Box mt={5} sx={{textAlign : "center"}}>
     <Typography  variant='h3'>{city}</Typography>
      <img style={{marginTop:"-20px" , marginBottom:"-20px"}} src="https://www.masaischool.com/img/homepage/scribble.png" alt="" /></Box>
     <Grid container ml={5} >
     
    {state.map((e)=>{
        return   <Card key={e._id} name={e}/>
    })}
</Grid>
  </>
}
