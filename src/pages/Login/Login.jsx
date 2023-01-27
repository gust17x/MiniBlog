import './Login.sass'

import { motion } from 'framer-motion'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../Hooks/useAuthentication'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(user)

  } 

  useEffect(() => {

    if(authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='login'>
        <h1>Entrar</h1>
       <p>Faça login para poder utilizar o sistema</p>

        <form className='register-form' onSubmit={handleSubmit}>

          <label>
            <span>Email: </span>
            <input type="text"
              name='displayEmail'
              required
              placeholder='Email do usuario'
              value={email }
              onChange={(e) => setEmail(e.target.value)}/>
          </label>

          <label>
            <span>Senha: </span>
            <input type='password'
              name='password'
              required placeholder='Insira sua senha'
              value={password }
              onChange={(e) => setPaswword(e.target.value)}/>
          </label>

          {!loading && <button submit='btn' className='btn'>Entrar</button>}
          {loading && <button submit='btn' className='btn' disabled>Aguardar...</button>}
          {error && <motion.p className='error' initial={{opacity: 0, scale: .1}}  animate={{opacity: 1, scale: 1}}>{error}</motion.p> }
        </form>
    </motion.div>
  )
}

export default Login