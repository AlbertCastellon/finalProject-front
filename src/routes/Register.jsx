import { useMy } from "../context/MyContext"
import axios from "axios"

const Register = () => {
    return (
        <>
            <form>
                <label htmlFor="name">Nombre: </label>
                <input type="text" id='name' name='name'  />
                <label htmlFor="surname">Apellido: </label>
                <input type="text" id='surname' name='surname'/>
                <label htmlFor="email">Correo Electronico: </label>
                <input type="email" id='email' name='email' />
                <label htmlFor="username">Nombre de usuario: </label>
                <input type="text" id='username' name='username'/>
                <label htmlFor="password">Contraseña: </label>
                <input type="text" id='password' name='password'/>
                <input type="submit" value="Registrarse" />

            </form>
        </>
    )
}

export default Register