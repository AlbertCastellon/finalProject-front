import { useState } from "react"
import React from "react"
import TarjetaMiembros from "../components/TarjetaMiembros"


const AboutUs = () => {
    //const baseUrl = env.REACT_APP_BASE_URL
    const [miembros, setMiembros] = useState([
        {   
            nombre: 'Ariel Córsico',
            puesto: 'Mecánico',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita nemo doloribus praesentium? Ipsum nam laudantium velit dolorum ducimus eos aspernatur sunt consequatur doloribus placeat nulla reprehenderit, doloremque ex aperiam!' 
        },
        {
            nombre: 'Marta Garcia',
            puesto: 'Contabilidad',
            descripcion: 'Earum quibusdam, laboriosam sint enim sed, praesentium architecto fugit aliquam voluptatum repellendus eligendi quos nobis asperiores voluptates molestias. Harum dolorum dignissimos labore facere alias praesentium ex, enim sapiente corporis eaque!'
        },
        {
            nombre: 'Juan Perez',
            puesto: 'Atención al Cliente',
            descripcion: 'Provident perspiciatis iure vero hic deleniti sit minus obcaecati placeat dolore qui similique corporis non culpa quis impedit maiores in debitis vitae natus eligendi ullam, rem possimus blanditiis? Asperiores, beatae.'
        },
        {
            nombre: 'Sandra Gómez',
            puesto: 'Logistica',
            descripcion: 'Aspernatur sapiente voluptatum tempora hic iste obcaecati, expedita nam neque nisi enim velit sit voluptate. Ab libero numquam doloribus illum suscipit corporis consequatur sit quis, modi animi ex quas quam!'
        },
        
    ])
    return(
        <main>
            <h1 className='title'>Quién somos</h1>
            <div className="miembros">
                {miembros.map(element => <TarjetaMiembros element={element} />)}
                <p>{import.meta.env.REACT_APP_BASE_URL}</p>
            </div>
            
        </main>
    )
}

export default AboutUs