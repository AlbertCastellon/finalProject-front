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
            const response = await axios.post('http://localhost:8080/login', payload)
            const data = response.data;
            console.log(typeof(data.token))
            console.log(typeof(data.userId))
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", data.userId)
            logInOut()

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