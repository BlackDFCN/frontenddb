import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from the server
        axios.get('/api/reservations')
            .then(response => setReservations(response.data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    return (
        <div>
            <h2>My Reservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>{reservation.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewReservations;
