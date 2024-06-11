import { useState } from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
    const navigate = useNavigate()

    const [titulo, setTitulo] = useState('')
    const [msg, setMsg] = useState('')



    const postar = async (event) => {
        event.preventDefault();
        console.log(titulo)
        console.log(msg)
        setTitulo('')
        setMsg('')
        try {
            const {data} = await api.post("/posts",
                {
                    title: titulo,
                    message: msg,
                }
            );

            console.log(data)
            alert("Post feito com sucesso!")
            navigate('/')
        }
        catch (err) {
            console.log("Erro:", err)
        }
    }



    return (
        <form onSubmit={postar}>
            <h1 className="theme">Criar Postagem</h1>
            <div className="form-container">
                <label htmlFor="titulo" className="theme" >Titulo:</label>
                <input placeholder="Titulo da Postagem" type="text" id="titulo" className="input" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor="msg" className="theme">Mensagem:</label>
                <textarea placeholder="Mensagem da Postagem" type="text" className="input msgm" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
            </div>
            <button type="submit" className="theme botao">Postar</button>
        </form>
    );
}

export default AddPage;