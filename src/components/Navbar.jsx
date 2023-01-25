import './Navbar.sass'

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navbar = () => {
  return (
    <motion.nav className='navbar' initial={{opacity: 0}} animate={{opacity: 1}}>
        <NavLink to='/' className='brand'>
            Mini <span>Blog</span>
        </NavLink>
        <ul className='links-list'>
            <motion.li >
                <NavLink to='/' >Home</NavLink>
            </motion.li>

            <motion.li >
               <NavLink to='/login'>Entrar</NavLink> 
            </motion.li>

            <motion.li >
               <NavLink to='/register'>Cadastrar</NavLink> 
            </motion.li>

            <motion.li >
               <NavLink to='/about'>Sobre</NavLink> 
            </motion.li>
        </ul>
        
        
    </motion.nav>
  )
}

export default navbar