import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import ProductPage from './components/ProductPage'
import ShoppingCart from './components/ShoppingCart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/shoppingCart' element={<shoppingCart />}></Route>
      </Routes>

    </Router> 
  )
}

export default App
