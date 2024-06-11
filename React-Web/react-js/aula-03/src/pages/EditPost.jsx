import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const EditPage = () => {
    const navigate = useNavigate()

    const [titulo, setTitulo] = useState('')
    const [msg, setMsg] = useState('')

    const { idPost, postTitle } = useParams();


    useEffect(() => {
        pegarPost();
    })

    const pegarPost = async () => {
        const resp = await api.get("/posts/" + idPost)
        console.log(resp)
    }


    const editar = async (event) => {

        event.preventDefault();
        console.log(titulo)
        console.log(msg)
        setTitulo('')
        setMsg('')
        try {
            const { data } = await api.put(`/posts/${idPost}`,
                {
                    title: titulo,
                    message: msg,
                }
            );

            console.log(data)
            alert("Post Editado!")
            navigate('/')
        }
        catch (err) {
            console.log("Erro:", err)
        }
    }




    return (
        <form onSubmit={editar}>
            <h1 className="theme">Editar Postagem</h1>
            <h2 className="theme">Postagem: {postTitle}</h2>
            <div className="form-container">
                <label htmlFor="titulo" className="theme" >Titulo:</label>
                <input placeholder="Titulo da Postagem" type="text" id="titulo" className="input" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor="msg" className="theme">Mensagem:</label>
                <textarea placeholder="Mensagem da Postagem" type="text" className="input msgm" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
            </div>
            <button type="submit" className="theme botao edit">Salvar</button>
        </form>
    );
}

export default EditPage;