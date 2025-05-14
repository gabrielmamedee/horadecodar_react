import React from 'react'
import { useState } from 'react'

const VotacaoSimples = () => {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const incrementarLikes = () => {
        setLikes((prev) => prev + 1)
    }

    const incrementarDislikes = () => {
        setDislikes((prev) => prev + 1)
    }
  return (
    <div>
        <p>👍{likes} 👎{dislikes}</p>
        <button onClick={incrementarLikes}>👍 Gostei</button>
        <button onClick={incrementarDislikes}>👎 Não Gostei</button>
    </div>
  )
}

export default VotacaoSimples