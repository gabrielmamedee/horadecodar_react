import './App.css'
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


function App() {


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
      </div>
    </>
  )
}

export default App
