import React, { useState } from 'react';

function EmployeeForm({ onClose, onSave }) {
  const [employee, setEmployee] = useState({ name: '', role: '', certifications: '' });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSave({
      ...employee,
      certifications: employee.certifications.split(',').map((cert) => cert.trim()),
      id: Date.now(),
    });
  };

  return (
    <div className="bg-accent text-white p-8 rounded-2xl shadow-light max-w-md mx-auto font-sans">
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>
      <input
        className="w-full bg-gray-200 text-black p-4 rounded-lg mb-4 outline-none focus:bg-white"
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />
      <input
        className="w-full bg-gray-200 text-black p-4 rounded-lg mb-4 outline-none focus:bg-white"
        type="text"
        name="role"
        placeholder="Role"
        value={employee.role}
        onChange={handleChange}
      />
      <input
        className="w-full bg-gray-200 text-black p-4 rounded-lg mb-4 outline-none focus:bg-white"
        type="text"
        name="certifications"
        placeholder="Certifications (comma-separated)"
        value={employee.certifications}
        onChange={handleChange}
      />
      <div className="flex justify-end space-x-4">
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-700 hover:bg-gray-600">
          Cancel
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 rounded-lg text-sm bg-primary text-white hover:bg-gray-900">
          Save
        </button>
      </div>
    </div>
  );
}

export default EmployeeForm;
