import image from '../assets/images/images.png'

const TarjetaMiembros = ( {element} ) => {
    return (
        <div className="tarjeta-miembro">
            <img className='img-perfil' src={image} alt="" />
            <div className="informacion">
                <h3>{element.nombre}</h3>
                <h4>{element.puesto}</h4>
                <p>{element.descripcion}</p>
            </div>
        </div>
    )
}

export default TarjetaMiembros