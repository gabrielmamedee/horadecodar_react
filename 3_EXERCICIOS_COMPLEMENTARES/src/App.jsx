import './App.css'
import Contador from './components/Contador'
import ListaDeFrutas from './components/ListaDeFrutas'
import ListaDeNomes from './components/ListaDeNomes'
import Multiplicador from './components/Multiplicador'
import VotacaoSimples from './components/VotacaoSimples'

function App() {

  return (
    <>
      <h2>Exemplos Previous state</h2>
      <Contador/>
      <br />
      <ListaDeNomes/>
      <br />
      <VotacaoSimples/>
      <br />
      <Multiplicador/>
      <br />
      <ListaDeFrutas/>
    </>
  )
}

export default App
