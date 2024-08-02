import { createContext, useContext, useState } from "react";
import axios from 'axios'


const MyContext = createContext()

export const MyProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const logInOut = () => {
        setIsLogged(!isLogged)
        localStorage.clear()
    }
    return (
        <MyContext.Provider value={{isLogged, logInOut}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)