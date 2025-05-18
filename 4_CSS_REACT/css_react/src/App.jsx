import './App.css'
// 2 - CSS de Componente
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15

  // classe dinamica
  const redTitle = true

  return (
    <>
      {/*1 - css global*/}
      <h1>CSS no React</h1>
      {/*2 - css de componente*/}
      <MyComponent />
      <p>Pegou o css do componente</p>
      {/*3 - inline style*/}
      <p style={{color: "blue", padding: "25px", borderLeft: "8px solid blue"}}>Este elemento tem estilo inline</p>
      {/*4 - inline style dinamico*/}
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'magenta'}}>CSS Dinamico</h2>
      <h2 style={n > 20 ? {color: 'purple'} : {color: 'magenta'}}>CSS Dinamico 2</h2>
      {/*5 - classe dinamica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo vai ter uma classe</h2>
      {/*6 - CSS Modules*/}
      <Title />
    </>
  )
}

export default App
