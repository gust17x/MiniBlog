import './Home.sass'

//hooks
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

// components



const Home = () => {

  const [query, setQuery] = useState("")
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDafault()



  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='home'>
      <h1>Veja os nossos posts mais recentes</h1>

      <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
        <button className='btn btn-dark'>Pesquisar</button>
      </form>

    <div className='posts'>
      <h1>Postagens...</h1>
      {posts && posts.length === 0 && (
        <div className='no-posts'>
          <p>Não foram encontrado posts</p>
          <Link to='/posts/create' className='btn'>Seja o primeiro a postar</Link>
        </div>
      )}
    </div>

    </motion.div>
  )
}

export default Home