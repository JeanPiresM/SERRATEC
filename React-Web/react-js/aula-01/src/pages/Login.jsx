import { useState } from 'react'
import './Login.css'

function Login() {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
const [tipo, setTipo] =  useState("password");
const [logado, setLogado] = useState(false);

  const handleButton = () =>{
    if(email != '' && senha != ''){
      alert(`Você logou com o email ${email} que vem do input!`)
      setLogado(true)
    }
    else{
      setLogado(false)
    }
  }
  
  const handleLogin = (event) => {
    event.preventDefault()
    alert("Você logou com o email "+email)
}

  const verSenha = () =>{
    setTipo(type => type == "password" ? "text" : 'password')
  }

  return (
    <>
    <form className="containerInput" onSubmit={handleLogin}>
      <label className='texto' htmlFor="email">Email:</label>
    <input type="email" id='email' className="input " name='email' placeholder='seuemail@email.com' onInput={(e) => setEmail(e.target.value)} required/>
    <label className='texto' htmlFor="senha">Senha:</label>
    <input type={tipo} className="input " id='senha' name='senha' placeholder='digite uma senha' required  onInput={(s) => setSenha(s.target.value)} value={senha}/>
    <button className="botaoLogin" type='submit'>Enviar!</button>
    </form>
    <div className='containerBotao'>
    <button className='botaoLogin' onClick={verSenha}>Ver senha</button>
    </div>
    </>
  )
}

export default Login
