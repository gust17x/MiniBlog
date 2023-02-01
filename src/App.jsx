import './App.sass'

// dependencias react
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
// components 
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// context
import { AuthProvider } from './context/AuthContext'

// hoks
import { useState, useEffect } from 'react'
import { useAuthentication } from './Hooks/useAuthentication'

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

// animation
import { motion } from 'framer-motion'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'
import Loading from './pages/Loading/Loading'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'

function App() {

  const [user, setUser] = useState(undefined)

  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser) {
    return  <Loading/>;
  }

  return (
    <motion.div className='app' initial={{opacity: 0}} animate={{opacity: 1}}>
      <AuthProvider value={{user}}>

      <BrowserRouter>
    <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/search' element={<Search/>}/>

          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>

          <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/>}/>

          <Route path='/posts/edit/:id' element={user ? <EditPost/> : <Navigate to='/login'/>}/>

          <Route path='/createpost' element={user ? <CreatePost/> : <Navigate to='/login'/>}/>

          <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to='/login'/>}/>

          <Route path='/posts/:id' element={<Post/>}/>
        
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>

      </AuthProvider>
    </motion.div>
  )
}

export default App
