import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable({name}) {
    console.log(name)
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 , marginTop:"80px" }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize:"30px"}}>First Name</TableCell>
            <TableCell sx={{fontSize:"30px"}} >Last Name</TableCell>
            <TableCell  sx={{fontSize:"30px"}}>Contect</TableCell>
            <TableCell sx={{fontSize:"30px"}} >Branch</TableCell>
            <TableCell sx={{fontSize:"30px"}}>Course</TableCell>
            <TableCell sx={{fontSize:"30px"}} >Email</TableCell>
            <TableCell sx={{fontSize:"30px"}} >Fees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {name.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.firstName}</TableCell>
              <TableCell >{row.lastName}</TableCell>
              <TableCell >{row.Contect}</TableCell>
              <TableCell >{row.Branch}</TableCell>
              <TableCell >{row.Course}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell > Rs - {row.Fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}