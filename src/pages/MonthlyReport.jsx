import React, { useState } from 'react';
import reportService from '../services/reportService';

const MonthlyReport = () => {
  const [reportMonth, setReportMonth] = useState('');
  const [report, setReport] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await reportService.getMonthlyReport(reportMonth);
      setReport(data);
    } catch (err) {
      console.error('Error fetching monthly report', err);
      alert('Failed to fetch monthly report');
    }
  };

  return (
    <div>
      <h2>Monthly Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Report Month:
          <input type="month" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)} required />
        </label>
        <button type="submit">Get Report</button>
      </form>
      {report && (
        <div>
          <h3>Report for {reportMonth}</h3>
          <p>Reservations Count: {report[2]}</p>
          <p>Top Tables: {report[3]}</p>
        </div>
      )}
    </div>
  );
};

export default MonthlyReport;
