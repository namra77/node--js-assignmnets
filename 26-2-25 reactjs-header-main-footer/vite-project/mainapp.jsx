// This is the entry point of React app. It renders the App component into the DOM.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);