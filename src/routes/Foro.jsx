import axios from "axios"
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import TarjetaComentario from "../components/TarjetaComentario";
import { useMyContext } from "../context/MyContext.jsx"
import Cookies from 'js-cookie'

const Foro = () => {
    const [comentarios, setComentarios] = useState([])
    const { isLogged } = useMyContext()

    const fetchData = async () => {
        const data = await axios.get(import.meta.env.REACT_APP_BASE_URL + '/api/comentarios')
        setComentarios(data.data)
    }
    let userId = 0
    if (isLogged){
      userId = Cookies.get('userId')
    }
    useEffect(() =>  {
        fetchData()
    }, [])
    console.log(comentarios)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    return (
        <main>
            <h1 className='title'>Foro</h1>
            <div className="foro">
            {comentarios?.map((item, index) => <TarjetaComentario item={item} index={index} />)}
            </div>
            <form onSubmit={handleSubmit((data) => {
                let userId = 0
                if (isLogged){
                  userId = Cookies.get('userId')
                }
                data.userId = userId
                axios.post(import.meta.env.REACT_APP_BASE_URL + '/comentarios', data)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            })}>
                <label>Título: </label>
                <input {...register('title', { required: true })} />
                {errors.nombre && <p>Rellena este campo.</p>}
                <label>Comentario: </label>
                <input maxLength={200} {...register('coment', { required: true })} />
                {errors.lastName && <p>Rellena este campo.</p>}
                <input type="submit" />
            </form>
        </main>
    )
}

export default Foro