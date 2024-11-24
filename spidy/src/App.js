import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Frontend/HomePage';
import Header from './Frontend/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
