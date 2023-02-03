import './Dashboard.sass'

import { Link } from 'react-router-dom'

import Loading from '../Loading/Loading'

// hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../Hooks/useFetchDocuments'
import { useDeleteDocument } from '../../Hooks/useDeleteDocuments'

import { motion } from 'framer-motion'

const Dashboard = () => {

  const { user } = useAuthValue()
  const uid = user.uid

  // post do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  const { deleteDocument } = useDeleteDocument("posts")

  if(loading) {
   return <Loading/> 
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='dashboard'>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foram encontrados posts</p>
          <Link to="/createpost" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <></>
      )}

      {posts &&
        posts.map((post) => (
          <div className="post_row" key={post.id}>
            <p>{post.title}</p>

          <img src={post.image} alt="" />

            <div className="actions">
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}

    </motion.div>
  )
}

export default Dashboard