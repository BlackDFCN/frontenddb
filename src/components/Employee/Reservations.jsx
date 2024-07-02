import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from the server
        axios.get('/api/employee/reservations')
            .then(response => setReservations(response.data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    return (
        <div>
            <h1>Manage Reservations</h1>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>{reservation.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeReservations;
