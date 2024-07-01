import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reports() {
  const [dailyReport, setDailyReport] = useState([]);
  const [weeklyReport, setWeeklyReport] = useState([]);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [reportDate, setReportDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportMonth, setReportMonth] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        if (reportDate) {
          const response = await axios.get(`http://localhost:5000/api/reports/daily?date=${reportDate}`);
          setDailyReport(response.data);
        }
        if (startDate && endDate) {
          const response = await axios.get(`http://localhost:5000/api/reports/weekly?startDate=${startDate}&endDate=${endDate}`);
          setWeeklyReport(response.data);
        }
        if (reportMonth) {
          const response = await axios.get(`http://localhost:5000/api/reports/monthly?month=${reportMonth}`);
          setMonthlyReport(response.data);
        }
      } catch (err) {
        console.error('Error fetching reports', err);
      }
    };
    fetchReports();
  }, [reportDate, startDate, endDate, reportMonth]);

  return (
    <div>
      <h1>Reports</h1>
      <div>
        <h2>Daily Report</h2>
        <input type="date" value={reportDate} onChange={(e) => setReportDate(e.target.value)} />
        <ul>
          {dailyReport.map((report, index) => (
            <li key={index}>{report}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Weekly Report</h2>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        <ul>
          {weeklyReport.map((report, index) => (
            <li key={index}>{report}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Monthly Report</h2>
        <input type="month" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)} />
        <ul>
          {monthlyReport.map((report, index) => (
            <li key={index}>{report}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reports;
