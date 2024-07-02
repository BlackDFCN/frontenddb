import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminReservations.css'; // Asegúrate de importar el archivo CSS

const AdminReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from the server
        axios.get('/api/admin/reservations/')
            .then(response => setReservations(response.data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    return (
        <div className="admin-reservations-container">
            <h1>Manage Reservations</h1>
            <table className="reservation-table">
                <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>Customer Name</th>
                        <th>Table Number</th>
                        <th>Reservation Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.customerName}</td>
                            <td>{reservation.tableNumber}</td>
                            <td>{reservation.reservationTime}</td>
                            <td>
                                <button className="action-button edit-button">Edit</button>
                                <button className="action-button delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminReservations;
