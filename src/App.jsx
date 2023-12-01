import React from 'react'
import './../src/App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';

const App = () => {
  return (
    <Router>
      <AllRoutes />
    </Router>
  )
}

export default App
