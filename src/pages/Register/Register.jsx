import './Register.sass'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuthentication } from '../../Hooks/useAuthentication'

const Register = () => {

  const [displayName, setDysplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password != confirmPassword) {
      setError("AS senhas precisão ser oguais")
      return
    }

    const res = await createUser(user)

    setDysplayName("")
    setEmail("")
    setPaswword("")
    setConfirmPassword("")

  } 

  useEffect(() => {

    if(authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <motion.div className='register' initial={{opacity: 0}} animate={{opacity: 1}}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuario e compartilhe suas historias</p>

        <form className='register-form' onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input type="text"
              name='displayName'
              required
              placeholder='Nome do usuario'
              value={displayName }
              onChange={(e) => setDysplayName(e.target.value)}/>
          </label>

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

          <label>
            <span>Confirmação de senha: </span>
            <input type='password'
              name='confirmPassword'
              required placeholder='Confirme a sua senha'
              value={confirmPassword }
              onChange={(e) => setConfirmPassword(e.target.value)}/>
          </label>

          {!loading && <button submit='btn' className='btn'>Cadastrar</button>}
          {loading && <button submit='btn' className='btn' disabled>Aguardar...</button>}
          {error && <motion.p className='error' initial={{opacity: 0, scale: .1}}  animate={{opacity: 1, scale: 1}}>{error}</motion.p> }
        </form>

    </motion.div>
  )
}

export default Register