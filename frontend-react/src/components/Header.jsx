import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../AuthContext'
import { useContext } from 'react'

const Header = () => {
    // const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    console.log("AuthContext object:", AuthContext)
    console.log("Context value:", context)

const { isLoggedIn, setIsLoggedIn } = context
const handleLogout= ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log("logged out")
    navigate('/login')
}

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Stock prediction portal</Link>

            <div>
                {isLoggedIn ? (
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                ):(
                    <>
                    <Button text='Login' class="btn-outline-info" url="/login"/>
                    &nbsp;
                    <Button text='Register' class="btn-info" url="/register"/>
                    </>
                )
                }
            </div>

        </nav>
    </>
  )
}

export default Header