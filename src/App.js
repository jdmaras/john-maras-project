import React from 'react';

import {
  HashRouter as Router, Routes, Route
} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' exact />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
