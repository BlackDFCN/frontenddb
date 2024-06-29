import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import SetNewPassword from './pages/SetNewPassword';
import UserProfile from './pages/UserProfile';
import MakeReservation from './pages/MakeReservation';
import UserReservations from './pages/UserReservations';
import AddTable from './pages/AddTable';
import TableList from './pages/TableList';
import EditTable from './pages/EditTable';
import AssignTable from './pages/AssignTable';
import AdminReservations from './pages/AdminReservations';
import EditReservation from './pages/EditReservation';
import DailyReport from './pages/DailyReport';
import WeeklyReport from './pages/WeeklyReport';
import MonthlyReport from './pages/MonthlyReport';
import ManageRoles from './pages/ManageRoles';
import ManagePermissions from './pages/ManagePermissions';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/set-new-password/:token" element={<SetNewPassword />} />
    <ProtectedRoute path="/profile" element={<UserProfile />} />
    <ProtectedRoute path="/make-reservation" element={<MakeReservation />} />
    <ProtectedRoute path="/reservations" element={<UserReservations />} />
    <ProtectedRoute path="/add-table" element={<AddTable />} roles={[1, 2]} />
    <ProtectedRoute path="/tables" element={<TableList />} roles={[1, 2]} />
    <ProtectedRoute path="/edit-table/:id" element={<EditTable />} roles={[1, 2]} />
    <ProtectedRoute path="/assign-table" element={<AssignTable />} roles={[1, 2]} />
    <ProtectedRoute path="/admin-reservations" element={<AdminReservations />} roles={[1, 2]} />
    <ProtectedRoute path="/edit-reservation/:id" element={<EditReservation />} roles={[1, 2]} />
    <ProtectedRoute path="/reports/daily" element={<DailyReport />} roles={[1, 2]} />
    <ProtectedRoute path="/reports/weekly" element={<WeeklyReport />} roles={[1, 2]} />
    <ProtectedRoute path="/reports/monthly" element={<MonthlyReport />} roles={[1, 2]} />
    <ProtectedRoute path="/manage-roles" element={<ManageRoles />} roles={[1]} />
    <ProtectedRoute path="/manage-permissions" element={<ManagePermissions />} roles={[1]} />
  </Routes>
);

export default AppRoutes;
