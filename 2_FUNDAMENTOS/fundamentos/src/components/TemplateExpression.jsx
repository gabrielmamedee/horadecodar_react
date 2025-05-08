import React from 'react'

// 4 - Template Expression

const TemplateExpression = () => {

    const name = "Gabriel"

    const data = {
        age: 26,
        job: "Programador",
    }

  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}!</h3>
        <p>A sua idade é {data.age} anos e você é um {data.job}.</p>
    </div>
  )
}

export default TemplateExpression