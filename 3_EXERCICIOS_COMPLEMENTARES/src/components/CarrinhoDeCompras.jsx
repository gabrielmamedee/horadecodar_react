/*
🧩 Desafio 6: Carrinho de Compras Simples

🎯 Contexto:

Você está criando a base de um sistema de e-commerce. O usuário pode adicionar e remover produtos do carrinho.

📋 Regras de negócio:
	•	O carrinho começa vazio.
	•	Cada clique no botão “Adicionar Produto” adiciona um produto aleatório (ex: 'Notebook', 'Mouse', 'Teclado', 'Monitor').
	•	Clique no botão “Remover Último Produto” remove o último item adicionado.
	•	Se o carrinho estiver vazio, o botão de remoção deve estar desativado ou não fazer nada.
	•	O carrinho deve ser exibido como uma lista.

🔍 Extras opcionais:
	•	Exibir a quantidade total de produtos.
	•	Usar useState com previousState para atualizar a lista. 
*/

import React from 'react'
import { useState } from 'react'

const produtosDisponiveis = ['Notebook', 'Mouse', 'Teclado', 'Monitor'];

const CarrinhoDeCompras = () => {

    const [carrinho, setCarrinho] = useState([])

    const adicionarProduto = () => {
        const produtoAleatorio = produtosDisponiveis[Math.floor(Math.random() * produtosDisponiveis.length)]

        setCarrinho((produtoAnterior) => [...produtoAnterior, produtoAleatorio])
    }

    const removerUltimoProduto = () => {
        setCarrinho((produtoAnterior) => produtoAnterior.slice(0, -1))
    }

  return (
    <div>
        <ul>
            {carrinho.length === 0 ? (
                <li>Carrinho Vazio</li>
            ) : (
                carrinho.map((produto, index) => (
                <li key={index}>{produto}</li>
            ))
            )}
        </ul>
        <p>Quantida totaol de produtos: {carrinho.length}</p>
        <button onClick={adicionarProduto}>Adicionar Produto</button>
        <button onClick={removerUltimoProduto} disabled={carrinho.length === 0}>Remover Último Produto</button>
    </div>
  )
}

export default CarrinhoDeCompras