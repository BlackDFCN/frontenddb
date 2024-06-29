import React, { useState } from 'react';
import reportService from '../services/reportService';

const DailyReport = () => {
  const [reportDate, setReportDate] = useState('');
  const [report, setReport] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await reportService.getDailyReport(reportDate);
      setReport(data);
    } catch (err) {
      console.error('Error fetching daily report', err);
      alert('Failed to fetch daily report');
    }
  };

  return (
    <div>
      <h2>Daily Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Report Date:
          <input type="date" value={reportDate} onChange={(e) => setReportDate(e.target.value)} required />
        </label>
        <button type="submit">Get Report</button>
      </form>
      {report && (
        <div>
          <h3>Report for {reportDate}</h3>
          <p>Reservations Count: {report[2]}</p>
          <p>Top Tables: {report[3]}</p>
        </div>
      )}
    </div>
  );
};

export default DailyReport;
