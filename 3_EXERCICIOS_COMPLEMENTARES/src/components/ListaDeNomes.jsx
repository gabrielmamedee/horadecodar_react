import React, { useState } from 'react'

const ListaDeNomes = () => {
    const [nomes, setNomes] = useState([])

    const listaNomesPossiveis = ['João', 'Maria', 'Pedro', 'Ana'];

    const adicionarNome = () => {
        const nomeAleatorio = listaNomesPossiveis[Math.floor(Math.random() * listaNomesPossiveis.length)]

        setNomes((prevNomes) => [...prevNomes, nomeAleatorio])
    }
  return (
    <div>
        <p>{nomes.join(" - ")}</p>
        <button onClick={adicionarNome}>Adicionar Nome</button>
    </div>
  )
}

export default ListaDeNomes