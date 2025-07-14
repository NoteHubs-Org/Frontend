import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  )
}

export default AuthRoutes