import './Search.sass'
// hooks
import React from 'react'
import { useFetchDocuments } from '../../Hooks/UsefetchDocuments'
import { useQuery } from '../../Hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {

  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

    return (
    <div className='search-container'>
        <h1>Resultados</h1>
        <div> 
            {posts && posts.length === 0 && (
                <>
                    <p>Nâo forão encontrados posts a partir da sua busca...</p>
                    <Link to='/' className='btn btn-dark'>Voltar</Link>
                </>
            )}
            {posts && posts.map((posts) => (

                <PostDetail post={posts} key={posts.id}/>
                
            ))}
        </div>
    </div>
  )
}

export default Search