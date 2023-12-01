import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function PrivateRoute({isLoggedIn}) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}
