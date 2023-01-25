import './App.sass'

// dependencias react
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// components 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'



function App() {

  return (
    <div className='app'>
      <BrowserRouter>
    <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
