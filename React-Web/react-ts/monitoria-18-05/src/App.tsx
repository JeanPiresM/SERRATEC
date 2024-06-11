import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetPosts from './pages/GetPosts'
import AddPost from './pages/AddPost'
import Boot from './pages/Bs'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GetPosts />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='/boot' element={<Boot />} />
        <Route path='/*' element={<h1>Erro 404</h1>} />
      </Routes>
    </>
  )
}

export default App
