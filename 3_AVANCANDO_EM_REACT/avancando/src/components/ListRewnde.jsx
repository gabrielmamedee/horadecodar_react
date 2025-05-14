import React from 'react'
import { useState } from 'react'

const ListRewnde = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        { id: 1, name: "Gabriel", age: 26 },
        { id: 2, name: "Ana", age: 25 },
        { id: 3, name: "Lucas", age: 30 },
        { id: 4, name: "Beatriz", age: 28 },
        { id: 5, name: "João", age: 35 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/*4 - render sem key*/}
        <ul>
            {list.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ul>
        {/*5 - render com key*/}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/*6 - previous state*/}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRewnde