import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reservations';

const makeReservation = (reservation) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.post(API_URL, reservation, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const getReservations = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(API_URL, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getAllReservations = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/all`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const updateReservation = (id, reservation) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.put(`${API_URL}/${id}`, reservation, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const cancelReservation = (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const assignTable = (reservationId, tableId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.put(`${API_URL}/${reservationId}/assign`, { tableId }, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
};

const reservationService = {
  makeReservation,
  getReservations,
  getAllReservations,
  updateReservation,
  cancelReservation,
  assignTable
};

export default reservationService;
