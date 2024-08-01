import { useState } from 'react'
import axios from 'axios'
import { useMyContext } from "../context/MyContext.jsx"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {logInOut} = useMyContext()
    const doLogin = async () => {
        try{
            const payload = {
                username,
                password
            }
            const response = axios.post('http://localhost:8080/login', payload)
            const data = (await response).data;
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", data.userId)
            logInOut()
        }catch(error){
            console.log(error)
        }

    }

    return (
        <div>
            <label>Usuario: </label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <label>Contraseña: </label>
            <input type="password" value={password} onChange={e => setpassword(e.target.value)} />
            <button onClick={doLogin}>Ingresar</button>
        </div>
    )
}

export default Login