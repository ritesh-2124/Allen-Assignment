import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react'
import BasicTable from "./Table"

export default function StudentDetails() {
   const [state, setstate] = useState([]);
     useEffect(() => {
       Data()
     }, []);

 
     const Data = ()=>{
        axios.get("http://localhost:8085/ragistration").then((res)=>{
             setstate([...res.data])
        }).catch((err)=>{
            console.log(err)
        })
     }
     console.log(state)

  return (
    <BasicTable  name ={state}/>
  )
}
