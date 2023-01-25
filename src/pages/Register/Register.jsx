import './Register.sass'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Register = () => {

  const [displayName, setDysplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
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

    console.log(user)

  } 

  return (
    <div className='register'>
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

          <button submit='btn' className='btn'>Cadastrar</button>
          {error && <motion.p className='error' initial={{opacity: 0, scale: .1}}  animate={{opacity: 1, scale: 1}}>{error}</motion.p> }
        </form>

    </div>
  )
}

export default Register