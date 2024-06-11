import { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const { data } = await api.get('/posts');
            setPosts(data)
        }
        catch (err) {
            console.log("Erro ao obter posts. ", err)
        }
    }



    const  apagarPost = async(id) => {
       
       try{
        const resp = await api.delete("/posts/"+ id)
        console.log("DELETANDO ", resp)
        // getPosts();
        setPosts(prevState => prevState.filter( item => resp.data.id !== item.id))
    }

    catch (err) {
        console.log("ERRO: ", err)
    }
}
     



    return (
        <>
            <h1 className="theme">-Gerenciamento de Posts-</h1>
            <button onClick={() => navigate('/addpost')} >Adicionar Posts</button>
            <ul >
                {posts.map(post =>
                    // é exigida sempre uma id por ser uma lista dinamica
                    <li className='theme' key={post.id} >
                        <h2 className='theme'>{post.title}</h2>
                        <p className='theme msg-post'>{post.message}</p>
                        <button className='botao del' onClick={() => apagarPost(post.id)}>Deletar</button>
                        <button className='botao theme edit' onClick={() => navigate('/editpost/' + post.id +`/${post.title}`)}>Editar</button>
                    </li>
                )}
            </ul>
        </>
    );

}
export default Home;