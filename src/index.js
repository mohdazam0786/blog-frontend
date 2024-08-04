import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Agar aap CSS file use kar rahe hain

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
