import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Tables from './pages/Tables';
import Reservations from './pages/Reservations';
import Reports from './pages/Reports';

import AdminDashboard from './components/Admin/Dashboard';
import AdminReservations from './components/Admin/Reservations';
import AdminTables from './components/Admin/Tables';
import AdminCustomers from './components/Admin/Customers';
import AdminEmployees from './components/Admin/Employees';
import AdminRoles from './components/Admin/Roles';
import AdminUsers from './components/Admin/Users';
import AdminReports from './components/Admin/Reports';
import CustomerHome from './components/Customer/Home';
import CreateReservation from './components/Customer/CreateReservation';
import ViewReservations from './components/Customer/ViewReservations';
import EmployeeDashboard from './components/Employee/Dashboard';
import EmployeeReservations from './components/Employee/Reservations';
import EmployeeTables from './components/Employee/Tables';
import EmployeeCustomers from './components/Employee/Customers';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reports" element={<Reports />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/reservations" element={<AdminReservations />} />
          <Route path="/admin/tables" element={<AdminTables />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/employees" element={<AdminEmployees />} />
          <Route path="/admin/roles" element={<AdminRoles />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/customer/home" element={<CustomerHome />} />
          <Route path="/customer/create-reservation" element={<CreateReservation />} />
          <Route path="/customer/view-reservations" element={<ViewReservations />} />
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/reservations" element={<EmployeeReservations />} />
          <Route path="/employee/tables" element={<EmployeeTables />} />
          <Route path="/employee/customers" element={<EmployeeCustomers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
