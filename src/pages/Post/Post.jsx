import './Post.sass'

import { motion } from 'framer-motion';

// hoks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      {post && (
       <div className='post'>
        <figure className='perfil'>

        <nav className='perfil-img'>
          <img src={post.image} alt="img perfil user" />
        </nav>

        <h2>{post.createdBy}</h2>

        </figure>

        <figure className='post-info'>
        <img src={post.image} alt="" />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </figure>

       </div>
      )}
    </motion.div>
  );
};

export default Post;