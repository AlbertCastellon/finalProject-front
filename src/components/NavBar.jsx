import { Link, useNavigate } from "react-router-dom"
import { useMyContext } from "../context/MyContext.jsx"
import Cookies from 'js-cookie'

const NavBar = () => {
    const {isLogged, logInOut} = useMyContext()
    const navigate = useNavigate()

    return(
        <header>
            
            <img id='logo' src='./src/assets/images/Sava.png' />
            <nav>
                <Link to='/'>Inicio</Link>
                <span> - </span>
                <Link to='/aboutus'>AboutUs</Link>
                <span> - </span>
                <Link to='/foro'>Foro</Link>
            </nav>
            <div className="buttons-div">
                {!isLogged ?
                    (<button className='log-btn' onClick={() => navigate('/login')}>Log in</button>) // link --> useNavigate
                    : (<button onClick={() => {
                        logInOut()
                        Cookies.remove('token')
                        Cookies.remove('userId')
                    }
                    } className='log-btn'>Log out</button>)
                }
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </div>
        </header>
    )
}

export default NavBar