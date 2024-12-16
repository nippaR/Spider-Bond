import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Frontend/HomePage';
import Header from './Frontend/Header';
import TakeMe from './Frontend/TakeMe';
import ContactUs from './Frontend/contactus';
import Footer from './Frontend/Footer';
import Products from './Frontend/Products';
import Card from './Frontend/Card';
import Signin from './Frontend/Signin';
import Register from './Frontend/Register';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  const noHeaderFooterPaths = ['/', '/register'];
  const isNoHeaderFooterPage = noHeaderFooterPaths.includes(location.pathname);


  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!isNoHeaderFooterPage && <Header />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='/takeme' element={<TakeMe />} />
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/card' element={<Card/>} />
        <Route path='/' element={<Signin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {!isNoHeaderFooterPage && <Footer />}
    </>
  );
}

export default App;