import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import NavBar from './components/NavBar'
import './App.css'
import { MyProvider } from './context/MyContext'
import Footer from './components/Footer'
import Foro from './routes/Foro'
import Register from './routes/Register'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/foro' element={<Foro />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </MyProvider>  
    </>
  )
}

export default App
