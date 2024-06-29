import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tables';

const addTable = (table) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.post(API_URL, table, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const getTables = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(API_URL, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getTable = (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const updateTable = (id, table) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.put(`${API_URL}/${id}`, table, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const deleteTable = (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const tableService = {
  addTable,
  getTables,
  getTable,
  updateTable,
  deleteTable
};

export default tableService;
