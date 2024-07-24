import { Link } from "react-router-dom"
import { useMy } from "../context/MyContext.jsx"

const NavBar = () => {
    const {isLogged} = useMy()
    return(
        <header>
            
            <img id='logo' src='./src/assets/images/Sava.png' />
            <nav>
                <Link to='/'>Home</Link>
                <span> - </span>
                <Link to='/aboutus'>AboutUs</Link>
            </nav>
            <div className="buttons-div">
                {!isLogged ?
                    (<button className='log-btn'>Log in</button>)
                    : (<button className='log-btn'>Log out</button>)
                }
                <Link to='/register'><button>Registrarse</button></Link>
            </div>
        </header>
    )
}

export default NavBar