import './Home.sass'

//hooks
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useFetchDocuments } from '../../Hooks/UsefetchDocuments'
// components
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query) {
      return Navigate(`/search?q=${query}`)
    }

  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='home'>
      <h4>Postagens mais recentes</h4>

      <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
        <button className='btn btn-dark'>Pesquisar</button>
      </form>

    <motion.div className='posts' initial={{y: 300}} animate={{y: 0}}>
      {loading && <p>carregando...</p> }
      {posts && posts.map((post) => (
      
        <PostDetail key={post.id} post={post}/>

      ))}
      {posts && posts.length === 0 && (
        <div className='no-posts'>
          <p>Não foram encontrado posts</p>
          <Link to='/posts/create' className='btn'>Seja o primeiro a postar</Link>
        </div>
      )}
    </motion.div>

    </motion.div>
  )
}

export default Home