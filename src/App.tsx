import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ShopPage from './pages/ShopPage/ShopPage';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/shop/:category' element={<ShopPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
