import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import BasicTable from "./Table";
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StudentDetails() {
   const [state, setstate] = useState([]);
   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
     setAge(event.target.value);
     axios.get("https://allendigitel.herokuapp.com/ragistration").then((res)=>setstate([...res.data.filter((el)=>el.Branch === age)]))
   };
   
     useEffect(() => {
       Data()
     }, []);
 
 
     const Data = ()=>{
        axios.get("https://allendigitel.herokuapp.com/ragistration").then((res)=>{
             setstate([...res.data])
        }).catch((err)=>{
            alert(err)
        })
     }

  return (<>
   <FormControl sx={{ m: 1, minWidth: 120 }}>
   <InputLabel id="demo-simple-select-helper-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Kota"}>Kota</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
          <MenuItem value={"Patna"}>Patna</MenuItem>
        </Select></FormControl>
    <BasicTable  name ={state}/>
    <Link style={{textDecoration:"none"}} to={"/admin/AdminRagistration"}><Button
              type="submit"
              variant="contained"
              sx={{ margin:"auto", mt: 5, mb: 2 , ml:85  }}
            >
            make co-Admin
            </Button></Link>
    </>
  )
}
