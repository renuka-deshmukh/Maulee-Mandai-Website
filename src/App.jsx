import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Veggies from './pages/Veggies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'
import CategoryModal from './pages/CategoryModal'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import ProductInfo from './pages/ProductInfo'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <>
    <BrowserRouter >
    <AuthProvider >
      <CartProvider> 
    <Navbar />
    <CategoryModal/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/product/:id" element={<ProductInfo />} />
      <Route path='/fresh-fruits' element={<Fruits />}></Route>
       <Route path='/fresh-veggies' element={<Veggies  />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<Register />}></Route>
     </Routes>
     <Footer/>
     </CartProvider>
     </AuthProvider>
    </BrowserRouter>
     
    </>
  )
}

export default App
