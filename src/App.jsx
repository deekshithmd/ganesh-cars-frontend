import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Dashboard from './routes/dashboard'
import CarListing from './routes/listing'
import CarDetails from './routes/details'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listing" element={<CarListing />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </div>
  )
}

export default App
