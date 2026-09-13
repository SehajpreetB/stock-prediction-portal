import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../AuthContext'
import { useContext } from 'react'


const Login = () => {

    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

    const handleLogin= async (e) =>{
        e.preventDefault();
        setLoading(true)
        const userData = {username,password}

    try{
        const response = await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
        console.log('login successfull')
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        setIsLoggedIn(true)
        navigate('/')
    }catch{
        console.error('Invalid credentials')
        setError('Invalid credentials')
    }finally{
        setLoading(false)
    }
    }

    

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4' >Login to our portal</h3>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <input type='text' className='form-control ' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        
                        </div>
                        
                        <div className='mb-5'>
                            <input type='password' className='form-control' placeholder='Set Password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                        </div>  
                        {error && 
                        <div className='text-danger'>
                            {error}
                        </div>}
                        
                        {
                            loading?
                            (
                                <button type='submit' className='btn btn-info d-block mx-auto' disabled>Logging in....</button>
                            ):
                            (
                                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                            )        
                        }
                        
                    </form>

                </div>

            </div>
        </div>
    </>
  )
}

export default Login