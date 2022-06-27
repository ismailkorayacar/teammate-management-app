import React from 'react';
import ReactDOM from 'react-dom';
import './common/styles/scss/App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeammateDashboard from "./components/TeammateDashboard";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="teammate-dashboard" element={<TeammateDashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
