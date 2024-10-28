// src/pages/Employees.js
import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import { getEmployees } from '../data/mockData';
import { Button } from '@mui/material';
import EmployeeForm from '../components/EmployeeForm';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    // Fetch employees from mock data
    getEmployees().then((data) => setEmployees(data));
  }, []);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setOpenForm(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employees</h2>
      <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
        Add Employee
      </Button>
      <EmployeeList employees={employees} />
      {openForm && (
        <EmployeeForm
          onClose={() => setOpenForm(false)}
          onSave={handleAddEmployee}
        />
      )}
    </div>
  );
}

export default Employees;
