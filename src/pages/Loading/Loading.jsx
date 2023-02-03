import './Loadinh.sass'

import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div className='loading' initial={{opacity: 0}} animate={{opacity: 1}}>
       
    <div className='loader'></div>
    <h3>Carrgeando...</h3>

    </motion.div>
  )
}

export default Loading