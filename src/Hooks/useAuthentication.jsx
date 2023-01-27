import {db} from "../firebase/config"
import { async } from '@firebase/util'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {

    const [ error, setError] = useState(null)

    const [loading, setLoading] = useState(null)

    // cleanup
    //deal with memory leak

    const [ canceled, setCanceled ] = useState(false)

    const auth = getAuth()

    function checkIfIscancelled() {
        if(canceled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIscancelled()

        setLoading(true)
        setError(null)

        try{

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user

        }catch (error) {

            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")) {
                systemErrorMessage = "E-mail js cadastrado."
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }
            setLoading(false)
            setError(systemErrorMessage)

        }

    }

    // logout sign out
    const logout = () => {
        checkIfIscancelled()
         signOut(auth)
    }

    // login - sign in

    const login = async(data) => {

        checkIfIscancelled()

        setLoading(true)

        setError(false)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            
            let systemErrorMessage;

            if(error.message.includes("user-not-fund")) {

                systemErrorMessage = "Ususario não encontrado."

            }else if(error.message.includes("password")) {
                systemErrorMessage = "Senha incorreta"
            }else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }
            setError(systemErrorMessage)
            setLoading(false)
        }

    }


    useEffect(() => {
        return () => setCanceled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}