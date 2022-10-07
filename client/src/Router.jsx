import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/login_page/view/LoginPage'
import RegisterPage from './pages/register_page/view/RegisterPage'

const CustomerRoutes = () => {
  return (
    
    <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default CustomerRoutes