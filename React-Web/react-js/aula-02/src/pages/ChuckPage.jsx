import axios from "axios"
import { useEffect, useState } from "react";
import './Chuck.css'

function HomePage() {

const [texto, setTexto] = useState()
const [loading, setLoading] = useState(true)

useEffect(() => {
    getJoke();
}, [])


    const getJoke = async () => {
        setLoading(true)
        try {
            const  {data}  = await axios.get("https://api.chucknorris.io/jokes/random")
            setTexto(data.value)
            
        }
        catch (err) {
            alert("Erro:", err)
        }
        setLoading(false)

   }
//    if(loading){
//     return <h1 >Carregando...</h1>
//    }



    return (
        <>
        <img src="https://www.maxim.com/wp-content/uploads/2021/05/chuck-norris-4-via-pinterest.jpg" />
        <h1 className="title">Chuck Norris says...</h1>
        <p className="joke">{loading ? <h1>Carregando...</h1> : texto}</p>
            <button disabled={loading} className="jokeButton" onClick={getJoke}>Tell me a joke!</button>
        </>
    )
}

export default HomePage;
