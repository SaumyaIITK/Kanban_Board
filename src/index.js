import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App.js';

// Find the root element in the DOM
const rootElement = document.getElementById('root');

// Create a root React DOM
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
