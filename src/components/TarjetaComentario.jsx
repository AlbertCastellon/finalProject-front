const TarjetaComentario = ({ item, index }) => {

    return(
        <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.coment}</p>
        </div>
    )
}

export default TarjetaComentario