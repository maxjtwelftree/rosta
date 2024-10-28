// src/data/mockData.js
export const getEmployees = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Alice Johnson',
            role: 'Nurse',
            certifications: ['CPR', 'First Aid'],
          },
          {
            id: 2,
            name: 'Bob Smith',
            role: 'Doctor',
            certifications: ['MD', 'Surgery'],
          },
          // Add more mock employees
        ]);
      }, 500);
    });
  };
  
  export const getShifts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            date: '2023-11-01',
            time: '08:00 - 16:00',
            employeeId: 1,
          },
          {
            id: 2,
            date: '2023-11-01',
            time: '16:00 - 00:00',
            employeeId: null,
          },
          // Add more mock shifts
        ]);
      }, 500);
    });
  };
  