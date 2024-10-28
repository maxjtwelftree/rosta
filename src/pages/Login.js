// src/pages/Login.js
import React from 'react';
import { Button, TextField } from '@mui/material';

function Login({ onLogin }) {
  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <TextField label="Username" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={onLogin} className="mt-4">
        Login
      </Button>
    </div>
  );
}

export default Login;
