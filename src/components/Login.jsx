import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from "../context/MyContext.jsx"
import Cookies from 'js-cookie'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {logInOut} = useMyContext()
    const navigate = useNavigate()
    const doLogin = async () => {
        try{
            const payload = {
                username,
                password
            }
            const response = await axios.post(import.meta.env.REACT_APP_BASE_URL + '/login', payload)
            const data = response.data;
            Cookies.set('token', data.token)
            Cookies.set('userId', data.userId)
            logInOut()
            navigate('/')
        }catch(error){
            console.log(error)
        }

    }

    return (
        <main>
            <div>
                <label>Usuario: </label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <label>Contraseña: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={doLogin}>Ingresar</button>
            </div>
        </main>
    )
}

export default Login