import React, { useState } from 'react';
import axios from 'axios';

const CreateReservation = () => {
    const [reservationDetails, setReservationDetails] = useState({
        customer_id: '',
        table_id: '',
        reservation_time: '',
        status: '',
        email: ''
    });

    const handleChange = (e) => {
        setReservationDetails({
            ...reservationDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/reservations', reservationDetails)
            .then(response => alert('Reservation created successfully'))
            .catch(error => console.error('Error creating reservation:', error));
    };

    return (
        <div>
            <h2>Create Reservation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer ID:</label>
                    <input type="text" name="customer_id" onChange={handleChange} />
                </div>
                <div>
                    <label>Table ID:</label>
                    <input type="text" name="table_id" onChange={handleChange} />
                </div>
                <div>
                    <label>Reservation Time:</label>
                    <input type="datetime-local" name="reservation_time" onChange={handleChange} />
                </div>
                <div>
                    <label>Status:</label>
                    <input type="text" name="status" onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <button type="submit">Create Reservation</button>
            </form>
        </div>
    );
};

export default CreateReservation;
