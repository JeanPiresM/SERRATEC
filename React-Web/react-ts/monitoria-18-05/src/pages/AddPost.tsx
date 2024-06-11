import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from "../services/api";
const AddPost = () => {

    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(titulo)
        console.log(texto)
        setTitulo('')
        setTexto('')
        try {
            const { data } = await api.post("/Posts",
                {
                    title: titulo,
                    message: texto,
                }
            );

            console.log(data)
            window.alert("Post feito com sucesso!")
            navigate('/')
        }
        catch (err) {
            console.log("Erro:", err)
        }
    }


    return (
        <>
            <h1 className="post-text">ADD POST</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="title" className="post-text">
                    Titulo:
                </label>
                <input id="title" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Digite o titulo do post" />
                <label htmlFor="texto" className="post-text ">
                    Mensagem:
                </label>
                <textarea id="texto" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite a mensagem do post" />
                <button className="botao post-text" type="submit">Enviar Post</button>
            </form>
        </>
    )
}


export default AddPost;