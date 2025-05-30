import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        console.log("Envio")

        alert(`Enviando os dados: ${username} - ${password}`)

        setUsername("")
        setPassword("")
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
                <input 
                    type="email" 
                    placeholder="exemplo@gmail.com" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username}
                />
                <FaUser className='icon' />
            </div>
            <div className='input-field'>
                <input 
                    type="password" 
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                <FaLock className='icon' />
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login