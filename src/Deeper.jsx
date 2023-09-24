import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

const Deeper = () => {
    const [signedIn, setSignedIn] = useContext(AuthContext)
    return (
        <>
            <div>Deeper is user signed in: {String(signedIn)}</div>
        </>
    )
}

export default Deeper