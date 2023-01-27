import { Link } from 'react-router-dom'

import './About.sass'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='about'>
      <h2>Sobre o mini <span>blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no front-end e fireBase no back-end</p>

      <Link to='/createpost' className='btn'>Criar post</Link>
    </motion.div>
  )
}

export default About