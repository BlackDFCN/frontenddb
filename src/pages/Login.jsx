import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');  // Limpiar cualquier error previo
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      if (response.data.token) {
        // Guardar el token JWT en el almacenamiento local
        const userData = {
          token: response.data.token,
          userId: response.data.userId,
          roleId: response.data.roleId,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        // Redirigir al usuario a la página de reservas
        navigate('/reservations');
      } else {
        setError('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
      }
    } catch (err) {
      console.error('Error logging in', err);
      setError('Credenciales inválidas. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido a EL PERUANOTE</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Usuario</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Ingresa</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
