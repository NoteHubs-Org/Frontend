import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "./authContext.js";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoutes
