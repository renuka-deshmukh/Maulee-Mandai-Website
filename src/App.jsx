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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Navbar />
    <CategoryModal/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fresh-fruits' element={<Fruits />}></Route>
       <Route path='/fresh-veggies' element={<Veggies  />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<Register />}></Route>
     </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
