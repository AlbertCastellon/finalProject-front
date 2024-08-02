import { Link } from "react-router-dom"
import { useMyContext } from "../context/MyContext.jsx"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const {isLogged, logInOut} = useMyContext()
    const navigate = useNavigate()

    return(
        <header>
            
            <img id='logo' src='./src/assets/images/Sava.png' />
            <nav>
                <Link to='/'>Home</Link>
                <span> - </span>
                <Link to='/aboutus'>AboutUs</Link>
                <span> - </span>
                <Link to='/foro'>Foro</Link>
            </nav>
            <div className="buttons-div">
                {!isLogged ?
                    (<button className='log-btn' onClick={() => navigate('/login')}>Log in</button>) // link --> useNavigate
                    : (<button onClick={logInOut} className='log-btn'>Log out</button>)
                }
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </div>
        </header>
    )
}

export default NavBar