import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Card from '../CourseDiv/Card';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
      Allen Digital Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
var course = JSON.parse(localStorage.getItem("ragistration"));
    
export default function Ragistration() {
  const [state, setstate] = useState({
    "firstName":"",
     "lastName":"",
     "email":"",
     "Contect":"",
     "Address":"",
    "Branch" :course.Branch,
    "Course":course.Course,
    "Fee" :course.Fee,
    "batch_start":course.batch_start,
    "batch_end":course.batch_end
  });

  
     
  const Data = (e)=>{
    const {id , value} = e.target;
    setstate({...state, [id]:value})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if(state.firstName != "" && state.lastName != "" && state.email != ""){
   axios.post("http://localhost:8085/ragistration" , state).then((res)=>{
   toast.success("we have alloted a slot for you please visit our branch ASAP")
   }).catch((err)=>{
    toast.error("enter valid information")
   })
  }else{
    toast.error("enter valid information")
  }
  };

  return <>
  <Box display={"flex"}>
  <Box sx={{margin:"auto"}}>
   <Typography mb={5}  variant='h4'>You are Applying for -</Typography>
  <Card name={course}/>
  </Box>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
           User Ragistration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  onChange={Data}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={Data}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={Data}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Contect"
                  onChange={Data}
                  label="Contect"
                  type="Contect"
                  id="Contect"
                  autoComplete="new-Contect"
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  onChange={Data}
                  label="Address"
                  type="Address"
                  id="Address"
                  autoComplete="new-Address"
                />
                
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2  , backgroundColor:"#6e71cc"}}
          
            >
            Apply
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider></Box>
    <ToastContainer/>
</>
}