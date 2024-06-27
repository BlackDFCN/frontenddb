import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const register = (username, password, email, role_id) => {
  return axios.post(`${API_URL}/register`, { username, password, email, role_id });
};

const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const resetPassword = (email) => {
  return axios.post(`${API_URL}/reset-password`, { email });
};

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
