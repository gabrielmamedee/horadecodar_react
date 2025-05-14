import React from 'react'
import { useState } from 'react'

const Multiplicador = () => {
    const [value, setValue] = useState(1)

    const multiplicaPorDois = () => {
        setValue((prevValor) => prevValor * 2)
    }
  return (
    <div>
        <p>Valor: {value}</p>
        <button onClick={multiplicaPorDois}>multiplicar valor atual por 2</button>
    </div>
  )
}

export default Multiplicador