import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Frontend/HomePage';
import Header from './Frontend/Header';
import TakeMe from './Frontend/TakeMe';
import ContactUs from './Frontend/contactus';
import Section from './Frontend/Sections';
import Footer from './Frontend/Footer';
import Products from './Frontend/Products';
import Card from './Frontend/Card';
import Signin from './Frontend/Signin';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Determine if the current path is '/signin'
  const isSigninPage = location.pathname === '/signin';

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!isSigninPage && <Header />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='/takeme' element={<TakeMe />} />
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/' element={<Section/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/card' element={<Card/>} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      {!isSigninPage && <Footer />}
    </>
  );
}

export default App;