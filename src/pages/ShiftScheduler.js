// src/components/ShiftScheduler.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Select, MenuItem } from '@mui/material';

function ShiftScheduler({ shifts }) {
  // Assume shifts is an array of shift objects with date, time, and assigned employee
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Employee</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {shifts.map((shift) => (
          <TableRow key={shift.id}>
            <TableCell>{shift.date}</TableCell>
            <TableCell>{shift.time}</TableCell>
            <TableCell>
              <Select value={shift.employeeId || ''} onChange={() => { /* Handle assignment */ }}>
                {/* Map through employees and create MenuItem components */}
                <MenuItem value="">Unassigned</MenuItem>
                {/* Assuming you have an employees array in the parent component */}
                {/* employees.map(emp => <MenuItem key={emp.id} value={emp.id}>{emp.name}</MenuItem>) */}
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ShiftScheduler;
