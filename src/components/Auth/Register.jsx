import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

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
      navigate('/login'); 
    } catch (err) {
      console.error('Error registering', err);
    }
  };

  return (
    <div className="register-container">
    <div className="register-box">
      <h2>Regístrate en EL PERUANOTE</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Nombre de usuario</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Correo electrónico</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="register-button">Registrar</button>
      </form>
    </div>
  </div>
);
}
export default Register;