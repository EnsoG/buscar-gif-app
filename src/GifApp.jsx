import { useState } from "react"
import { Buscar } from "./components/Buscar"
import { ContenedorGif } from "./components/ContenedorGif"

//rafc crea de manera automatica el componente
export const GifApp = () => {
    const [itemBuscado, setItemBuscado] = useState([])

    const addItem = (valor) => {
        //includes permite buscar un valor dentro de un arreglo, !sirve para verificar que no este en el arreglo
        if (!itemBuscado.includes(valor))
            setItemBuscado([valor, ...itemBuscado])

    }
    return (
        //className reemplaza en jsx class por temas de reserva de variables
        <div className="container">
            <h1 className="text-center">Buscar Gifs</h1>
            <Buscar onNewBuscar={addItem} />
            {/* componente para mostrar gif */}

            {itemBuscado.map((item) => {
                return <ContenedorGif key={item} itemBuscado={item} />
            }
            )}
        </div>
    )
}
