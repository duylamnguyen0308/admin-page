
import './App.css';
import Dashboard from 'container/Dashboard';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Users from 'container/Users';
import Oders from 'container/Oders';
import Costumers from 'container/Costumers';
import Product from 'container/Product';
import Coupon from 'container/Coupon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user" element={<Users />} />
      <Route path="/costumer" element={<Costumers />} />
      <Route path="/product" element={<Product />} />
      <Route path="/oder" element={<Oders />} />
      <Route path="/coupon" element={<Coupon />} />
      
    </Routes>
  );
}

export default App;
