import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Generate Reports</h1>
            <select onChange={e => setReportType(e.target.value)} value={reportType}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            <button onClick={generateReport}>Generate</button>
            {report && <div>{JSON.stringify(report)}</div>}
        </div>
    );
};

export default AdminReports;
