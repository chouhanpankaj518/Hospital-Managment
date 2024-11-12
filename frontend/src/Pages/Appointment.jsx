import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect , useState } from 'react';

export default function Appointment() {

  let [show , setshow]=useState([])

  useEffect(()=>{
 async function getdata(){
  let res =await axios.get("http://localhost:5600/Appointment/get")
  console.log(res.data)
  setshow(res.data)
 }
 getdata()
  },[])
  return (
    
    
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#22445c' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Patients Name</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">contact</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">date</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">time</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Reason</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">doctor name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {show.map((row, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.Reason}</TableCell>
                <TableCell align="right">{row.doctorname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}
