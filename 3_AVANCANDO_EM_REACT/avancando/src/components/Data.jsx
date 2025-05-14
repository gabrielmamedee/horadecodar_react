import React from 'react'
import { useState } from 'react'

const Data = () => {

const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(10)}>Mudar variável</button>
    </div>
  )
}

export default Data