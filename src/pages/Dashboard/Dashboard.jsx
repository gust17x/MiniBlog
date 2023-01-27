import './Dashboard.sass'

import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h1>Dashboard</h1>
    </motion.div>
  )
}

export default Dashboard