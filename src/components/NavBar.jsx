import { Link } from "react-router-dom"
import { useMy } from "../context/MyContext.jsx"

const NavBar = () => {
    const {isLogged} = useMy()
    return(
        <> 
            <img src='' />
            <Link to='/'>Home</Link>
            <span> - </span>
            <Link to='/aboutus'>AboutUs</Link>
            {!isLogged ?
                (<button className='log-btn'>Log in</button>)
                : (<button className='log-btn'>Log out</button>)
            }
            <Link to='/register'><button>Registrarse</button></Link>
        </>
    )
}

export default NavBar