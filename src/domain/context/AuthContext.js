import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signInUseCase } from "../useCases/signIn";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function signIn({ email, password }) {
    setLoading(true)
    try {
      const result = await signInUseCase({ email, password })
      await AsyncStorage.setItem('sessionId', result.id)
      setSession(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    setLoading(true)
    try {
      await AsyncStorage.setItem('sessionId', '')
      setUser(null)
      setSession(null)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    AsyncStorage.getItem('sessionId')
      .then((value) => {
        console.log(value)
        setSession(value)
    }).catch((error) => {
      setError(error)
    })
  }, [session])

  return (
    <AuthContext.Provider value={{
      user,
      session,
      signIn,
      signOut,
      loading,
      error
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext