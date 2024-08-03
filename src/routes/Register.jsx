import { useForm } from 'react-hook-form';
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return (
        <main>
            <form className='register_form' onSubmit={handleSubmit((data) => {
                axios.post('http://localhost:8080/register', data)
                  .then(function (response) {
                    console.log(response);
                    navigate('/')
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            })}>
                <label>Nombre: </label>
                <input {...register('nombre', { required: true })} />
                {errors.nombre && <p>Rellena este campo.</p>}
                <label>Apellido: </label>
                <input {...register('primer_apellido', { required: true })} />
                {errors.lastName && <p>Rellena este campo.</p>}
                <label>Email: </label>
                <input {...register('email', {required: true })} />
                {errors.email && <p>Rellena este campo.</p>}
                <label>Nombre de usuario: </label>
                <input {...register('username', {required: true })} />
                {errors.username && <p>Rellena este campo.</p>}
                <label>Contraseña: </label>
                <input {...register('password', {required: true })} />
                {errors.password && <p>Rellena este campo.</p>}
                <input type="submit" />
            </form>
        </main>
    );
}

export default Register