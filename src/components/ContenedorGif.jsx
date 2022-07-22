import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGif'
import { ItemGif } from './ItemGif'

export const ContenedorGif = ({ itemBuscado }) => {
    const [imagenes, setImagenes] = useState([])
    //useEffect sirve para disparar efectos secundarios cuando ocurre alguna acción
    useEffect(() => {
        getGifs(itemBuscado).then((newImagen) => setImagenes(newImagen))
    }, [])
    return (
        <div>
            <h1>{itemBuscado}</h1>
            <div className='row'>
                {imagenes.map(img => (
                    <div className='col-3' key={img.id}>
                        {/* crear componente ItemGif, que mustrar de una a una las imagenes */}
                        <ItemGif imagen={img} />
                        {/* fin itemGif */}
                    </div>
                ))}
            </div>
        </div>
    )
}
