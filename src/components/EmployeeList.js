// src/components/EmployeeList.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';

function EmployeeList({ employees }) {
  return (
    <Paper elevation={0} style={{ padding: '20px', border: '1px solid #e0e0e0' }}>
      <Typography variant="h2" gutterBottom>
        Employees
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', borderBottom: 'none' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', borderBottom: 'none' }}>Role</TableCell>
            <TableCell style={{ fontWeight: 'bold', borderBottom: 'none' }}>Certifications</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id} hover>
              <TableCell style={{ borderBottom: 'none' }}>{emp.name}</TableCell>
              <TableCell style={{ borderBottom: 'none' }}>{emp.role}</TableCell>
              <TableCell style={{ borderBottom: 'none' }}>{emp.certifications.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default EmployeeList;
