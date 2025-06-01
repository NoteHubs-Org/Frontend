import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignUp />} />
    </Routes>
  )
}

export default AuthRoutes