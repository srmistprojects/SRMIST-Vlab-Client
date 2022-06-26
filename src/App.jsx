/**
 * App
 */

// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navbar/navbar';
import Snackbar from './components/reusable/snackbar';
import Backdrop from './components/reusable/backdrop';

// Custom
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      <Snackbar />
      <Backdrop />
    </div>
  );
}

export default App;
