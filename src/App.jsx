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
import { UserProvider } from './context/UserProvider'
import ProductInfo from './pages/ProductInfo'
import { CartProvider } from './context/CartContext'

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
    <BrowserRouter >
    <UserProvider >
      <CartProvider> 
    <Navbar />
    <CategoryModal/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/product/:id" element={<ProductInfo />} />
      <Route path='/fresh-fruits' element={<Fruits />}></Route>
       <Route path='/fresh-veggies' element={<Veggies  />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<Register setIsRegistered = {setIsRegistered}/>}></Route>
     </Routes>
     <Footer/>
     </CartProvider>
     </UserProvider>
    </BrowserRouter>
     
    </>
  )
}

export default App
