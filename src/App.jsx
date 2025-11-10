import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Dashboard from './routes/dashboard'
import CarListing from './routes/listing'
import CarDetails from './routes/details'
import Login from './routes/login'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './App.css'



function App() {

  return (
    <><Header />
      <div className='max-w-[1280px] mx-auto px-4 min-h-[calc(100vh-160px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listing" element={<CarListing />} />
          <Route path="/details/:id" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
