import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Registro de Usuario
const register = (username, password, email, role_id) => {
  return axios.post(`${API_URL}/register`, { username, password, email, role_id });
};

// Inicio de Sesión
const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Cerrar Sesión
const logout = () => {
  localStorage.removeItem('user');
};

// Restablecimiento de Contraseña
const resetPassword = (email) => {
  return axios.post(`${API_URL}/reset-password`, { email });
};

// Establecer Nueva Contraseña
const setNewPassword = (token, newPassword) => {
  return axios.post(`${API_URL}/set-new-password`, { token, newPassword });
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  setNewPassword
};

export default authService;
