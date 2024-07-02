import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (err) {
        console.error('Error fetching employees', err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employee_id}>
            {employee.first_name} {employee.last_name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
