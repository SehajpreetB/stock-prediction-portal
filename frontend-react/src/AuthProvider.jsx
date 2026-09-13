import { useState, useContext } from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )
    console.log("AuthProvider rendered")

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider