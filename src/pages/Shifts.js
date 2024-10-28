// src/pages/Shifts.js
import React, { useState, useEffect } from 'react';
import ShiftScheduler from './ShiftScheduler';
import { getShifts } from '../data/mockData';

function Shifts() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    getShifts().then((data) => setShifts(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shift Scheduling</h2>
      <ShiftScheduler shifts={shifts} />
    </div>
  );
}

export default Shifts;
