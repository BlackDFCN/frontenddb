import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reports';

const getDailyReport = (reportDate) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/daily/${reportDate}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getWeeklyReport = (startDate, endDate) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/weekly/${startDate}/${endDate}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const getMonthlyReport = (reportMonth) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.get(`${API_URL}/monthly/${reportMonth}`, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  }).then(response => response.data);
};

const reportService = {
  getDailyReport,
  getWeeklyReport,
  getMonthlyReport
};

export default reportService;
