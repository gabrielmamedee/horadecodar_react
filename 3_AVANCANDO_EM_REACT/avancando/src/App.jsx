import './App.css'
import { useState } from 'react'

// 2 - imagem em assets
import ny1 from './assets/ny1.jpg'
// 3 - useState
import Data from './components/Data'
// 4 - renderizacao de lista
import ListRewnde from './components/ListRewnde'
// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'
// 8 - props
import ShowUserName from './components/ShowUserName'
// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componentes
const cars = [
  { id: 1, brand: "BMW", color: "Preto", km: 30000 },
  { id: 2, brand: "Fiat", color: "Branco", km: 5604 },
  { id: 3, brand: "Audi", color: "Azul", km: 4340 },
  { id: 4, brand: "Chevrolet", color: "Vermelho", km: 15000 },
  { id: 5, brand: "Toyota", color: "Prata", km: 22000 },
];

// 12 - fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction'

//15 - state lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  function showMessage() {
    alert("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => (
    setMessage(msg)
  )

  return (
    <>
      <div style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/*1 - imagem em public*/}
        <img src="/img.jpg" alt="Rua" />
        {/*2 - imagem da noite*/}
        <img src={ny1} alt="" />
        {/*3 - useState*/}
        <Data />
        {/*4 - renderizacao de lista*/}
        <ListRewnde />
        {/*7 - render condicional*/}
        <ConditionalRender/>
        {/*8 - props*/}
        <ShowUserName name={"Gabriel"} />
        {/*9 - desestruturando props*/}
        <CarDetails brand={"BMW"} km={30.000} color={"Preta"} />
        {/*10 - reaproveitamento de componentes*/}
        <CarDetails brand={"Fiat"} km={5604} color={"Brnaco"} />
        <CarDetails km={4340} brand={"Audi"} color={"Azul"} />
        {/*11 - renderizacao de lista com components*/}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}
        {/*12 - fragments*/}
        <Fragment />
        {/*13 - children*/}
        <Container>
          <p>Testando Children</p>
        </Container>
        {/*14 - funcao em prop*/}
        <ExecuteFunction myFunction={showMessage}/>
        {/*15 - state lift*/}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
