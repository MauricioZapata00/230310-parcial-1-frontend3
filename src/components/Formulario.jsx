import React, { useState } from 'react'
import Card from './Card'

//nombre, especie, edad
const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [especie, setEspecie] = useState("")
    const [edad, setEdad] = useState(0)
    const [seMuestraAlerta, setSeMuestraAlerta] = useState(false)
    const [mensajeDeAlerta, setMensajeDeAlerta] = useState("")
    const [seMuestraCard, setSeMuestraCard] = useState(false)


    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeSpecie = (event) => {
        setEspecie(event.target.value)
    }

    const handleChangeAge = (event) => {
        setEdad(event.target.value)
    }

    const handleSubmitAnimal = (event) => {
        event.preventDefault()
        //console.log('Está funcionando')
        if (nombre.length <= 3 || nombre[0] === " ") {
            setSeMuestraAlerta(true)
            setMensajeDeAlerta("Por favor chequea que la información sea correcta.")
            return
        }
        if (especie.length <= 6) {
            setSeMuestraAlerta(true)
            setMensajeDeAlerta("Por favor chequea que la información sea correcta.")
            return
        }
        setSeMuestraAlerta(false)
        setMensajeDeAlerta("")
        setSeMuestraCard(true)
    }

    const deleteAlert = () => {
        setSeMuestraAlerta(false)
        setMensajeDeAlerta("")
        setNombre("")
        setEspecie("")
        setEdad(0)
    }


    return (
        <form onSubmit={handleSubmitAnimal}>
            <div>
                <h1>
                    Formulario de animales
                </h1>
            </div>
            <div>
                <label htmlFor="Name" style={{
                    paddingRight: "2em",
                    fontFamily: "sans-serif"
                    }}>Nombre del animal: </label>
                <input id='Name' type="text" onChange={handleChangeName} value={nombre} />
            </div>
            <div>
                <label htmlFor="Specie" style={{
                    paddingRight: "2em",
                    fontFamily: "sans-serif"
                    }}>Especie del animal: </label>
                <input id='Specie' type="text" onChange={handleChangeSpecie} value={especie} />
            </div>
            <div>
                <label htmlFor="Age" style={{
                    paddingRight: "2em",
                    fontFamily: "sans-serif"
                    }}>Años: </label>
                <input id='Age' type="number" min={0} max={500} onChange={handleChangeAge} value={edad} />
            </div>
            <div>
                <input type="submit" value="Enviar" style={{
                    width: "15.5em",
                    marginTop: "3em",
                }}/>
            </div>
            {seMuestraAlerta && <dialog open={seMuestraAlerta}>
                {mensajeDeAlerta}
                <button onClick={deleteAlert}>&#10005;</button>
            </dialog>}
            <div>
                {seMuestraCard && <Card name={nombre} specie={especie} age={edad} />}
            </div>
        </form>
    )
}
//https://www.htmlsymbols.xyz/heart-symbols
export default Formulario