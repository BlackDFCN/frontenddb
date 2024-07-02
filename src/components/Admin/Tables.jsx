import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTables = () => {
    const [tables, setTables] = useState([]);
    const [form, setForm] = useState({ table_number: '', capacity: '', status: '' });
    const [editing, setEditing] = useState(false);
    const [currentTable, setCurrentTable] = useState(null);

    useEffect(() => {
        fetchTables();
    }, []);

    const fetchTables = async () => {
        try {
            const response = await axios.get('/api/admin/tables');
            setTables(response.data);
        } catch (error) {
            console.error('Error fetching tables:', error);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editing) {
                await axios.put(`/api/admin/tables/${currentTable.id}`, form);
            } else {
                await axios.post('/api/admin/tables', form);
            }
            fetchTables();
            setForm({ table_number: '', capacity: '', status: '' });
            setEditing(false);
            setCurrentTable(null);
        } catch (error) {
            console.error('Error saving table:', error);
        }
    };

    const handleEdit = (table) => {
        setForm({ table_number: table.TABLE_NUMBER, capacity: table.CAPACITY, status: table.STATUS });
        setEditing(true);
        setCurrentTable(table);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/tables/${id}`);
            fetchTables();
        } catch (error) {
            console.error('Error deleting table:', error);
        }
    };

    return (
        <div>
            <h1>Manage Tables</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Table Number:</label>
                    <input type="text" name="table_number" value={form.table_number} onChange={handleChange} />
                </div>
                <div>
                    <label>Capacity:</label>
                    <input type="text" name="capacity" value={form.capacity} onChange={handleChange} />
                </div>
                <div>
                    <label>Status:</label>
                    <input type="text" name="status" value={form.status} onChange={handleChange} />
                </div>
                <button type="submit">{editing ? 'Update' : 'Create'} Table</button>
            </form>
            <ul>
                {tables.map(table => (
                    <li key={table.ID}>
                        {table.TABLE_NUMBER} - {table.CAPACITY} - {table.STATUS}
                        <button onClick={() => handleEdit(table)}>Edit</button>
                        <button onClick={() => handleDelete(table.ID)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminTables;
