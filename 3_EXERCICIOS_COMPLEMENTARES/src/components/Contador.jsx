import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
        setContador((prevValor) => prevValor + 1)
    }

    const diminuirContador = () => {
        setContador((prevValor) => prevValor -1)
    }

  return (
    <div>
        <p>Valor contador: {contador}</p>
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={diminuirContador}>Diminuir</button>
    </div>
  )
}

export default Contador