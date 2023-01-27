import './Postsdetail.sass'

import { Link } from 'react-router-dom'



const PostDetail = ({post}) => {
  return (
    <div className='post-detail'>
      <nav className='nav-img'>
        <img src={post.image} alt={post.title} />
      </nav>
        <h2>{post.title}</h2>
        <p className='createdBy'>{post.createdBy}</p>
        <div className='tags'>
            {post.tags.map((tag) => (

                <p key={tag}>
                    <span>#</span>
                {tag}</p>

            ))}
        </div>

            <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>

    </div>
  )
}

export default PostDetail