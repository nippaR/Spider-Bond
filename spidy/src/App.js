import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Frontend/HomePage';
import Header from './Frontend/Header';
import TakeMe from './Frontend/TakeMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/header' element={<Header />} />
        <Route path='/takeme' element={<TakeMe />} />
      </Routes>
    </Router>
  );
}

export default App;
