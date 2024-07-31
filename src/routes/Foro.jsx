import axios from "axios"
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import TarjetaComentario from "../components/TarjetaComentario";

const Foro = () => {
    const [comentarios, setComentarios] = useState([])

    const fetchData = async () => {
        const data = await axios.get('http://localhost:8080/api/comentarios')
        console.log(data)
        setComentarios(data.data)
    }
    
    useEffect(() =>  {
        fetchData()
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return (
        <main>
            <h1>Foro</h1>
            <div className="foro">
            {comentarios?.map((item, index) => <TarjetaComentario item={item} index={index} />)}
            </div>
            <form onSubmit={handleSubmit((data) => {
                axios.post('http://localhost:8080/comentarios', data)
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