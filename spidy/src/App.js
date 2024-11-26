import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Frontend/HomePage';
import Header from './Frontend/Header';
import TakeMe from './Frontend/TakeMe';
import ContactUs from './Frontend/contactus';
import Section from './Frontend/Sections';
import Footer from './Frontend/Footer';
import Products from './Frontend/Products';
import Card from './Frontend/Card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='/header' element={<Header />} />
        <Route path='/takeme' element={<TakeMe />} />
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/' element={<Section/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/card' element={<Card/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
