import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Add from './pages/AddPost.jsx'
import Edit from './pages/EditPost.jsx'

function App() {

  return (
    <>
      <header className='cabecalho'>
        <nav >
          <ul>
            <li className='theme'>
              <NavLink to='/'
                className={({ isActive }) => (isActive ? 'active-link' : 'theme')}
              >Home</NavLink>
            </li>
            <li className='theme'>
              <NavLink to='/addpost'
                className={({ isActive }) => (isActive ? 'active-link' : 'theme')}
              >
                Adicionar Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>


      <h1 className='theme'>Menu de navegação</h1>
      <Routes>
        {/* os elements são guardadis na patas pages */}
        <Route path='/' element={<Home />} />
        <Route path='/addpost' element={<Add />} />
        <Route path='/editpost/:idPost/:postTitle' element={<Edit />} />


        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
      <footer className='theme'><h1>Rodapé</h1></footer>

    </>
  )
}

export default App
