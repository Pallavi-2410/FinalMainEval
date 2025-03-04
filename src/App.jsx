import React from 'react'
import Navbar from './components/features/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element= { <Login/> }/>
        <Route path='/register' element= { <Register/> }/>
    </Routes>
    </>
  )
}

export default App
