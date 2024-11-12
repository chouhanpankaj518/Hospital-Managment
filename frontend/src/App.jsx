import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from "../src/Images/home-hospital-logo.webp"
import Home from './Pages/Home';
import Doctor from './Pages/Doctor';
import Patients from './Pages/Patients';
import Admin from './Pages/admin/Admin';
import Report from './Pages/Report';
import './App.css'; 
import Appointment from './Pages/Appointment';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header className="header">
          <img src={logo} alt="Medical Logo" className="logo" />
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/Doctor">Doctor</Link>
            <Link to="/Patients">Patients</Link>
            <Link to="/Appointment">Appointment</Link>
            <Link to="/Report">Report</Link>
            <Link to="/Admin">Admin</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Patients" element={<Patients />} />
          <Route path="/Appointment" element={<Appointment/>}/>
          <Route path="/Report" element={<Report/>} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}