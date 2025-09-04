import './index.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainFormPage from './components/MainFormPage.js';
import HubSpokePageHorizontal from './components/HubSpokePageHorizontal.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainFormPage />} />
      <Route path="/hub-spoke/:id" element={<HubSpokePageHorizontal />} />
    </Routes>
  );
}

export default App;
