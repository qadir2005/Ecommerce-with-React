import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
}
from "react-router-dom"

import Home from "./pages/home/Home.jsx"
import Dashboard from './pages/admin/dashboard/dashboard.jsx'

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="dashboard" element={<Dashboard />}/>
    </Routes>
    </Router>
  
      
  )
}

export default App
