import React from 'react'
import { useState } from 'react'

const listaDeFrutas = ['Banana', 'Maçã', 'Uva']

const ListaDeFrutas = () => {

    const [frutas, setFrutas] = useState(listaDeFrutas)

    const adicionarFruta = (novaFruta) => {
        setFrutas((frutasAnteriores) => [...frutasAnteriores, novaFruta])
    }

    const resetarFrutas = () => {
        setFrutas(listaDeFrutas)
    }

  return (
    <div>
        <p>Frutas: {frutas.join(", ")}</p>
        <button onClick={() => adicionarFruta("Laranja")}>Adicionar Laranja</button>
        <button onClick={resetarFrutas}>Resetar Lista</button>
    </div>
  )
}

export default ListaDeFrutas