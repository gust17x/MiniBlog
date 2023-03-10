 import './EditPost.sass'

 import { motion } from 'framer-motion'
 import { useAuthValue } from "../../context/AuthContext"
 import { useEffect, useState } from 'react'
 import { useNavigate, useParams } from 'react-router-dom'
 import { useFetchDocument } from '../../Hooks/useFetchDocument'
 import { useUpdateDocument } from '../../Hooks/useUpdateDocument'


 const EditPost = () => {

   const { id } = useParams()
   const { document: post } = useFetchDocument("posts", id)

   const [title, setTitle] = useState("")
   const [image, setImage] = useState("")
   const [body, setBody] = useState("")
   const [tags, setTags] = useState([])
   const [formError, setFormError] = useState("")

     useEffect(() => {

         if(post) {
             setTitle(post.title)
             setBody(post.body)
             setImage(post.image)

             const textTags = post.tags.join(", ")

             setTags(textTags)

         }

     }, [post])

   const { user } = useAuthValue()
   const navigate = useNavigate()

   const { updateDocument, response } = useUpdateDocument("posts")

   const handleSubmit = (e) => {
     e.preventDefault();
     setFormError("");

      //validate image
     try {
       new URL(image);
     } catch (error) {
       setFormError("A imagem precisa ser uma URL.");
     }

      //create tags array
     const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

      //check values
     if (!title || !image || !tags || !body) {
       setFormError("Por favor, preencha todos os campos!");
     }

     if(formError) return

     const data = {
       title,
       image,
       body,
       tags: tagsArray,
       uid: user.uid,
       createdBy: user.displayName
     }

     updateDocument(id, data);

      //redirect to home page
     navigate("/dashboard");
   };

  
   return (
     <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='EditPost'>

     {post && (

         <>
         <h2>Editando post: {post.title}</h2>
         <p>Altere os dados do post como desejar!</p>

         <form onSubmit={handleSubmit}>
         <label>
           <span>T??tulo:</span>
           <input
             type="text"
             name="text"
             required
             placeholder="Pense num bom t??tulo..."
             onChange={(e) => setTitle(e.target.value)}
             value={title}
           />
         </label>
         <label>
           <span>URL da imagem:</span>
           <input
             type="text"
             name="image"
             required
             placeholder="Insira uma imagem que representa seu post"
             onChange={(e) => setImage(e.target.value)}
             value={image}
           />
         </label>
         <p className='preview-title'>Preview da imagem atual</p>
             <img src={post.image} alt={post.title} />
         <label>
           <span>Conte??do:</span>
           <textarea
             name="body"
             required
             placeholder="Insira o conte??do do post"
             onChange={(e) => setBody(e.target.value)}
             value={body}
           ></textarea>
         </label>
         <label>
           <span>Tags:</span>
           <input
             type="text"
             name="tag"
             required
             placeholder="Insira as tags separadas por v??rgula"
             onChange={(e) => setTags(e.target.value)}
             value={tags}
           />
         </label>
         {!response.loading && <button className="btn">Salvar post</button>}
         {response.loading && (
           <button className="btn" disabled>
             Aguarde.. .
           </button>
         )}
         {(response.error || formError) && (
           <p className="error">{response.error || formError}</p>
         )}
       </form>
         </>

     )}

     </motion.div>
   )
 }

 export default EditPost

