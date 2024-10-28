import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-accent text-white px-8 py-4 flex justify-between items-center shadow-light font-sans">
      <div className="text-xl font-semibold">Rosta</div>
      <div className="flex space-x-6">
        <Link to="/" className="text-sm font-medium hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/employees" className="text-sm font-medium hover:text-gray-300">
          Employees
        </Link>
        <Link to="/shifts" className="text-sm font-medium hover:text-gray-300">
          Shifts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
