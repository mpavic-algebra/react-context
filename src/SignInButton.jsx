import {useContext} from 'react'
import {AuthContext} from './AuthContextProvider'

const SignInButton = () => {
    const [signedIn, setSignedIn] = useContext(AuthContext)
    return (
        <button onClick={() => setSignedIn(prev => !prev)}>{signedIn ? "Sign out" : "Sing in"}</button>
      )

}

export default SignInButton