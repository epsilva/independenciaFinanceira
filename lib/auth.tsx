import { createContext, Context, useContext, useState, useEffect } from 'react'
import firebase from './firebase'
import { createUser } from './db'
import { toast } from 'react-toastify'

interface Auth {
  uid: string
  email: string | null
  name: string | null
  photoUrl: string | null
  token: string | null
}

interface AuthContext {
  auth: Auth | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signInWithFacebook: () => Promise<void>
  signInWithEmailPassword: (email, password) => Promise<void>
  createWithEmailAndPassword: (email, password) => Promise<void>
  signOut: () => Promise<void>
}

const authContext: Context<AuthContext> = createContext<AuthContext>({
  auth: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithFacebook: async () => {},
  signInWithEmailPassword: async (email, password) => {},
  createWithEmailAndPassword: async (email, password) => {},
  signOut: async () => {}
})

const formatAuthState = (user: firebase.User): Auth => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  token: null
})

function useProvideAuth() {
  const [auth, setAuth] = useState<Auth | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const listErrors = [
    {
      code: 'auth/weak-password',
      msg: 'A senha deve ter pelo menos 6 caracteres'
    },
    {
      code: 'auth/invalid-email',
      msg: 'O endereço de e-mail está formatado incorretamente.'
    },
    {
      code: 'auth/user-not-found',
      msg:
        'Não há nenhum registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.'
    },
    {
      code: 'auth/email-already-exists',
      msg:
        'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.'
    },
    {
      code: 'auth/id-token-expired',
      msg: 'O token de código do Firebase provisionado expirou.'
    },
    {
      code: 'auth/id-token-revoked',
      msg: 'O token de código do Firebase foi revogado.'
    },
    {
      code: 'auth/id-token-revoked',
      msg: 'O token de código do Firebase foi revogado.'
    }
  ]

  /**
   * Callback function used for firebase.auth.onAuthStateChanged().
   * Takes the user object returned and formats it for my state.
   * We fetch the idToken and append it to my auth state and store it.
   */
  const handleAuthChange = async (authState: firebase.User | null) => {
    if (!authState) {
      return
    }

    // Formats response into my required state.
    const formattedAuth = formatAuthState(authState)
    // Fetch firebase auth ID Token.
    formattedAuth.token = await authState.getIdToken()
    // Stores auth into state.
    setAuth(formattedAuth)
    // Sets loading state to false.
    setLoading(false)
  }

  /**
   * Callback function used for response from firebase OAuth.
   * Store user object returned in firestore.
   * @param firebase User Credential
   */
  const signedIn = async (response: firebase.auth.UserCredential) => {
    setLoading(false)
    if (!response.user) {
      throw new Error('No User')
    }

    // Format user into my required state.
    const authedUser = formatAuthState(response.user)
    // firestore database function
    createUser(authedUser.uid as string, authedUser)
  }

  const signedError = async (response: firebase.auth.Error) => {
    console.log(response)
    setLoading(false)
    const error = listErrors.filter(el => el.code === response.code)
    if (error.length > 0) {
      toast.error(error[0].msg)
    } else {
      toast.error('Ops! Ocorreu um erro inesperado.')
    }
  }

  /**
   * Callback for when firebase signOut.
   * Sets auth state to null and loading to true.
   */
  const clear = () => {
    setAuth(null)
    setLoading(false)
  }

  /**
   * Triggers firebase Oauth for Google and calls signIn when successful.
   * sets loading to true.
   */
  const signInWithGoogle = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(signedIn)
  }

  /**
   * Triggers firebase Oauth for E-mail and Password and calls signIn when successful.
   * sets loading to true.
   */
  const signInWithEmailPassword = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(signedIn)
      .catch(signedError)
  }

  /**
   * Triggers firebase Oauth for facebook and calls signIn when successful.
   * sets loading to true.
   */
  const signInWithFacebook = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(signedIn)
  }

  /**
   * Create user with E-mail and Password.
   * sets loading to true.
   */
  const createWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(signedIn)
      .catch(signedError)
  }

  /**
   * Calls firebase signOut and with clear callback to reset state.
   */
  const signOut = () => {
    return firebase.auth().signOut().then(clear)
  }

  /**
   * Watches for state change for firebase auth and calls the handleAuthChange callback
   * on every change.
   */
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthChange)
    return () => unsubscribe()
  }, [])

  // returns state values and callbacks for signIn and signOut.
  return {
    auth,
    loading,
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmailPassword,
    createWithEmailAndPassword,
    signOut
  }
}

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext)
