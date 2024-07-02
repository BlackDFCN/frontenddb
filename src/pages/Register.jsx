import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role_id, setRoleId] = useState(1); // Asegúrate de que este role_id existe en la tabla Roles
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Mostrar datos en la consola
    console.log({
      username,
      password,
      email,
      role_id
    });

    try {
      await axios.post('http://localhost:5000/api/users/', { username, password, role_id, email });
      //navigate('/login'); 
    } catch (err) {
      console.error('Error registering', err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Role ID</label>
          <input type="number" value={role_id} onChange={(e) => setRoleId(parseInt(e.target.value, 10))} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
