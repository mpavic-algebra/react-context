import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [signedIn, setSignedIn] = useState(false)
    return (
        <AuthContext.Provider value={[signedIn, setSignedIn]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider