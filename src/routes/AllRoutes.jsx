import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Profile from '../pages/profile/Profile'
import Assignment from '../pages/assigenments/Assigenment'
import Submission from '../pages/submissions/Submission'
import PrivateRoute from './PrivateRoute'
import ErrorPage from '../components/ErrorPage'
import Admin from '../pages/Admin'


function AllRoutes() {
  const isLoggedIn = localStorage.getItem('token') !== null;
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
        <Route path='/' element={<Profile />} />
        <Route path='/assignment' element={<Assignment />} />
        <Route path='/submission' element={<Submission />} />
        <Route path='/admin' element={<Admin />}/>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default AllRoutes