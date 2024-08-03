const Home = () => {
    return(
        <main>
            <h1 className='title'>Servicios</h1>
            <h2 className="titulos-home">Mécanica Integral</h2>
            <div className="servicios-lista">
                <div className="servicios"><h3>Suspensión</h3></div>
                <div className="servicios"><h3>ITV</h3></div>
                <div className="servicios"><h3>Diagnosis</h3></div>
                <div className="servicios"><h3>Distribución</h3></div>
                <div className="servicios"><h3>Embrague</h3></div>
                <div className="servicios"><h3>Motocicletas</h3></div>
                <div className="servicios"><h3>Electrónica</h3></div>
                <div className="servicios"><h3>Revisiones</h3></div>
                <div className="servicios"><h3>Pneumáticos</h3></div>
            </div>
            <h2 className="titulos-home">Motosport</h2>
            <div className="servicios-lista">
                <div className="servicios-moto"><h3>Geometria</h3></div>
                <div className="servicios-moto"><h3>Reprogramación</h3></div>
                <div className="servicios-moto"><h3>Accesorios a medida</h3></div>
                <div className="servicios-moto"><h3>Restauración de clássicos</h3></div>
            </div>
            
        </main>
    )
}

export default Home