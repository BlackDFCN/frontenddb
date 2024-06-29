import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

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

const getUserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/profile`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getRoles = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/roles`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getPermissions = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/permissions`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const assignPermission = (roleId, permissionId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.post(`${API_URL}/assign-permission`, { roleId, permissionId }, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const createRole = (roleName) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.post(`${API_URL}/roles`, { role_name: roleName }, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  setNewPassword,
  getUserProfile,
  getRoles,
  getPermissions,
  assignPermission,
  createRole
};

export default authService;
