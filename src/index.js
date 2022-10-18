import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/app.css';
import './css/reset.css';
import Router from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router/>
  </React.StrictMode>
);
