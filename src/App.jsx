import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeholder from './pages/placeorder/Placeholder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>   
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Cart/>}></Route>
        <Route path='/' element={<Placeholder/>}></Route>
      </Routes>
    </div>
  )
}

export default App
