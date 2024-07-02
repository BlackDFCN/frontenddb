import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
      } catch (err) {
        console.error('Error fetching customers', err);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customer_id}>
            {customer.first_name} {customer.last_name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
