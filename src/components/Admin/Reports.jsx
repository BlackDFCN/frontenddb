import React, { useState } from 'react';
import axios from 'axios';
import './css/AdminReports.css'; // Asegúrate de importar el archivo CSS

const AdminReports = () => {
    const [reportType, setReportType] = useState('daily');
    const [report, setReport] = useState(null);

    const generateReport = () => {
        const endpoint = `/api/admin/reports/${reportType}`;
        axios.post(endpoint)
            .then(response => setReport(response.data))
            .catch(error => console.error('Error generating report:', error));
    };

    return (
        <div className="admin-reports-container">
            <h1>Generate Reports</h1>
            <div className="report-options">
                <label htmlFor="reportType">Select Report Type:</label>
                <select id="reportType" onChange={e => setReportType(e.target.value)} value={reportType}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button className="generate-button" onClick={generateReport}>Generate Report</button>
            </div>
            {report && (
                <div className="report-output">
                    <h2>{reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h2>
                    <pre>{JSON.stringify(report, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AdminReports;
