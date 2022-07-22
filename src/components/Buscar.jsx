import { useState } from "react"

export const Buscar = ({ onNewBuscar }) => {
    //hookm useState permite cambiar el estado de una const 
    const [inputBuscar, setInputBuscar] = useState('')
    //sirve para cambiar el valor 
    const cambiarInputBuscar = (event) => {
        setInputBuscar(event.target.value)
    }
    const enviar = (event) => {
        event.preventDefault()//impide que la página se recargue por el form    
        onNewBuscar(inputBuscar)  //permite enviar el texto ingresado a otro componente

    }

    return (
        <>
            <form onSubmit={enviar}>
                <div className="row">
                    <div className="col-8">
                        <input type="text"
                            value={inputBuscar}
                            onChange={cambiarInputBuscar}
                            placeholder="ingrese texto para buscar"
                            className="form-control"
                        />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </form>
        </>
    )
}
