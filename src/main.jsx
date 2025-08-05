// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';  // your existing global CSS

// Render your App into the #root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);