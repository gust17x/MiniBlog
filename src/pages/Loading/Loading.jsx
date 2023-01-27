import './Loadinh.sass'

import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div className='loading' initial={{opacity: 0}} animate={{opacity: 1}}>
       <h1>Carregando</h1>
        <p>Aguarde um momento</p>
    </motion.div>
  )
}

export default Loading