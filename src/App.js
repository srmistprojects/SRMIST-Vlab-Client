/**
 * App
 */

// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './routes/AppRoutes';

// Utils
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
