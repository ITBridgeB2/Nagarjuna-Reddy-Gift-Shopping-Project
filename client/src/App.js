import './App.css';
import React from 'react';
import Homepage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Electronics from './components/Electronics';
import HomeAppliances from './components/HomeAppliances';
import Books from './components/Books';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 

import Payment from './components/Payment';

function App() {
  return (
    <CartProvider>  {/* ✅ Wrap everything with CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/HomeAppliances" element={<HomeAppliances />} />
          <Route path="/Books" element={<Books />} />
          <Route path='/payment' element={<Payment/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
