
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Doctor() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    async function getdata() {
      let res = await axios.get('http://localhost:5600/doctor/getdata');
      // res = await res.json();
      setShow(res.data);
      console.log(res.data);
    }
    getdata();
  }, []);


  const data = {
    labels:show.map((e) => e.name),
    datasets: [
      {
        label: 'salary',
        data: show.map((e) => e.salary),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        color:"white",
      },
    ],
  };


  const options = {
    responsive: true,
    color:"white",
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        color:"white",
        text: 'Doctor Experience Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis at zero
       
      },
    },
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#22445c' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Name</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Experience</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Salary</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Distance from hospital</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Type of Treatment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {show.map((row, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.experience}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.distance}</TableCell>
                <TableCell align="right">{row.treatment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Doctor Experience Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
