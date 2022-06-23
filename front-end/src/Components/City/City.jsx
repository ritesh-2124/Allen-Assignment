import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"

export default function City() {
  const [state, setstate] = useState("");
 

  return  <>
   <Box sx={{"display":"flex" , "gap":"50px" , "margin":"auto" , "marginLeft":"25%" , "marginTop":"50px"}}>

    <Link to={"/Delhi"} style={{textDecoration:"none" , color:"#494fe3"}}>  <Box sx={{"height":"200px"  ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"  , "width":"200px"   , "textAlign":"center" , "borderRadius":"20px"}}>
    <img style={{"borderRadius":"20px"}} src="https://previews.123rf.com/images/millena12/millena121712/millena12171200018/91536486-delhi-skyline-icon-.jpg" alt=""  height="80%"  width="100%"/>
    <h2 style={{"marginTop":"0px"}}>Delhi</h2>
   </Box></Link>
   <Link  style={{textDecoration:"none" , color:"#3c42ec"}} to={"/Patna"}>
   <Box sx={{"height":"200px" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , "width":"200px"  , "textAlign":"center" , "borderRadius":"20px"}}>
    <img style={{"borderRadius":"20px"}} src="https://previews.123rf.com/images/gropgrop/gropgrop1512/gropgrop151200091/49929854-patna-skyline-detailed-silhouette-trendy-vector-illustration-linear-style.jpg" alt=""  height="80%"  width="100%"/>
    <h2 style={{"marginTop":"0px"}}>Patna</h2>
   </Box></Link>
   <Link  style={{textDecoration:"none" , color:"#474ce8"}} to={"/Kota"}>
   <Box sx={{"height":"200px" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , "width":"200px"  , "textAlign":"center" , "borderRadius":"20px"}}>
    <img style={{"borderRadius":"20px"}} src="https://cdnv4.studybase.in/img/esnextstorage/21984_20e7.png?preset=500*700" alt=""  height="80%"  width="100%"/>
    <h2 style={{"marginTop":"0px"}}>Kota</h2>
   </Box></Link>
   </Box>
  </>
  
}
