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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Patients() {
  const [display, setDisplay] = useState([]);

  const data = {
    labels: display.map((e) => e.name),
    datasets: [
      {
        label: 'Fee Due',
        data: display.map((e) => e.feeDue),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Fee Paid',
        data: display.map((e) => e.feePaid),
        backgroundColor: display.map((e) => e.feePaid >= 1000 ? 'red' : '#46A1DD'),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patients Fee Record',
        color: 'white',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch('http://localhost:5600/patient/getpatients');
        let data = await response.json();
        setDisplay(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    }
    getData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#22445c" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>PatientNo</TableCell>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Age</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
              <TableCell sx={{ color: "white" }} align="right">City</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Disease</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Doctor's Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Fee Due</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Fee Paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {display.map((row, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.PatientNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.disease}</TableCell>
                <TableCell align="right">{row.doctorname?.name || 'N/A'}</TableCell>
                <TableCell align="right">{row.feeDue}</TableCell>
                <TableCell align="right">{row.feePaid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Patients Fee Record</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
