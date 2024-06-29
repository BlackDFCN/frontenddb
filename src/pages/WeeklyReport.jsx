import React, { useState } from 'react';
import reportService from '../services/reportService';

const WeeklyReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [report, setReport] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await reportService.getWeeklyReport(startDate, endDate);
      setReport(data);
    } catch (err) {
      console.error('Error fetching weekly report', err);
      alert('Failed to fetch weekly report');
    }
  };

  return (
    <div>
      <h2>Weekly Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </label>
        <button type="submit">Get Report</button>
      </form>
      {report && (
        <div>
          <h3>Report for {startDate} to {endDate}</h3>
          <p>Reservations Count: {report[2]}</p>
          <p>Top Tables: {report[3]}</p>
        </div>
      )}
    </div>
  );
};

export default WeeklyReport;
