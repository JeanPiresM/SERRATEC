import './App.css'
import Login from './pages/Login'
import Propriedade from './components/Propriedade'
import ComponenteDois from './components/componenteDois'
import ComponenteTres from './components/componenteTres'
import '../src/pages/Login.css'


function App() {

  // texto vindo do componente pai
const texto = "TEXTO VINDO DO COMPONENTE PAI"

  return (
    <>
    {/* texto por Propriedade */}

      <Propriedade msg="Login" />

    {/* componentes que recebem texto do componente pai */}
      {/* <ComponenteDois texto={texto}/>
      <ComponenteTres texto={texto}/> */}
      <Login />
    </>
  )
}

export default App
