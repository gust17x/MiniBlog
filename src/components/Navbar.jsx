import './Navbar.sass'

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useAuthentication } from '../Hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'

const navbar = () => {

  const { user } = useAuthValue()
  const { logout } = useAuthentication()

  return (
    <motion.nav className='navbar' initial={{opacity: 0}} animate={{opacity: 1}}>
        <NavLink to='/' className='brand'>
            Mini <span>Blog</span>
        </NavLink>
        <ul className='links-list'>
            <motion.li >
                <NavLink to='/' >Home</NavLink>
            </motion.li>

          {!user && (
            <>
            <li >
               <NavLink to='/login'>Entrar</NavLink> 
            </li>

            <li >
               <NavLink to='/register'>Cadastrar</NavLink> 
            </li>
            </>
          )}


          {user && (
            <>
            <li >
               <NavLink to='/dashboard'>Dashboard</NavLink> 
            </li>

            <li >
               <NavLink to='/createpost'>Novo post</NavLink> 
            </li>
            </>
          )}

            <li >
               <NavLink to='/about'>Sobre</NavLink> 
            </li>
            {user && (
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            )}
        </ul>
        
        
    </motion.nav>
  )
}

export default navbar