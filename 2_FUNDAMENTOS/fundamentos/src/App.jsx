import './App.css'

// 2 - importando componente
import FirstComponent from './components/FirstComponent'

// 4 - Template Expression
import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent'

//6 - Evento
import Events from './components/Events'

function App() {
  // 3 - comnetários
  return (
    <>
      {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
