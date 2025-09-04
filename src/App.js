import './index.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainFormPage from './components/MainFormPage.js';
import DashboardPage from './components/DashboardPage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainFormPage />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
