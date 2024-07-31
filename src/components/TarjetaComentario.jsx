const TarjetaComentario = ({ item, index }) => {
    let autor
    if (!item.username) {
        autor = 'Anónimo'
    } else {
        autor = item.username
    }

    return(
        <div className='card-coment' key={index}>
            <h3>{item.title}</h3>
            <p>{item.coment}</p>
            <p id='autor'>Creado por: {autor}</p>
        </div>
    )
}

export default TarjetaComentario