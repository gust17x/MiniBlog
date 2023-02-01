import './Search.sass'
// hooks
import React from 'react'
import { useFetchDocuments } from '../../Hooks/UsefetchDocuments'
import { useQuery } from '../../Hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Search = () => {

  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

    return (
    <motion.div className='search-container' initial={{opacity: 0}} animate={{opacity: 1}}>

        <div> 

        {posts && <h2>{posts.length} resultado(s) encontrados</h2> }

            {posts && posts.length === 0 && (
                <>
                    <p>Nâo forão encontrados posts a partir da sua busca...</p>
                    <Link to='/' className='btn btn-dark'>Voltar</Link>
                </>
            )}
            {posts && posts.map((posts) => (

                <figure>
                  <PostDetail post={posts} key={posts.id}/>  
                </figure>
                
            ))}

              <Link to='/' className='btn btn-dark'>Buscar outro post</Link>

        </div>
    </motion.div>
  )
}

export default Search