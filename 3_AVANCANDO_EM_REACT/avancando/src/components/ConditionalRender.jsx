import React from 'react'

const ConditionalRender = () => {
    const x = true
    const y = 5

    const name = "Gabriel"
  return (
    <div>
        {/*7 - render condicional*/}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
        {y > 2 && <p>Se y for maior que 2!</p>}
        {/*8 - else*/}
        <h3>Render ternário</h3>
        {name === "João" ? (
            <div>
                <p>Olá, João!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender