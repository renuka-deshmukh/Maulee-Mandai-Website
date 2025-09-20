import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Veggies from './pages/Veggies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fresh-fruits' element={<Fruits />}></Route>
       <Route path='/fresh-veggies' element={<Veggies  />}></Route>
     </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
