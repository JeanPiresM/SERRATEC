import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'


type Posts = {
    id: string,
    title: string,
    message: string
}

const GetPosts = () => {


    const [posts, setPosts] = useState<Posts[]>([])
    const [postsFiltrados, setPostsFiltrados] = useState<Posts[]>([])
    const navigate = useNavigate();

    const fetchPosts = async () => {
        try {
            const resp = await api.get("/Posts")
            setPosts(resp.data);
            setPostsFiltrados(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    const navegar = () => {
        navigate('/add')
    }

    const filtro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtrado = posts.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setPostsFiltrados(filtrado)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',

        }}>
            <h1 className='post-text'>Pagina GetPosts</h1>
            <input placeholder='Faça sua busca' onChange={filtro} />
            {postsFiltrados.map(item =>
                <div className='post-box'>
                    <h3 className='post-text' key={item.id}>{item.title}</h3>
                    <p className='post-text'>{item.message}</p>
                </div>
            )}
            <button className='botao post-text' onClick={navegar}>Página de Postagem</button>
        </div>
    )
}


export default GetPosts;


