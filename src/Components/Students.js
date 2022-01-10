import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  NavLink,  } from 'react-router-dom'
import { StudentContext } from './StudentContext';
import './styling.css'
import { useContext } from 'react';


const Students = () => {
    const [students] = useContext(StudentContext);

  return (
    <>
    <div className='studentspage'>
    <h1 className='Stud_heading'>Students Details:</h1>
      <button className='addstubtn'><NavLink to="/AddStudent">Add Student</NavLink></button>
    </div>
    <div className='stud-table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">{student.course}</TableCell>
              <TableCell align="right">{student.batch}</TableCell>
              <TableCell align="right">{student.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
export default Students