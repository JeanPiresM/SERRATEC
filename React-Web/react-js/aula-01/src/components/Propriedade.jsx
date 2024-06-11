import { MdComputer } from "react-icons/md";


function Propriedade(props) {

  const chamarMsg = () => {
    alert("ALERTA, VOCÊ CLICOU NO BOTÃO :)!")
  }

  return (
    <>
    <MdComputer size={250} color="white"/>

      <h1>{props.msg}</h1>

{/* botão para chamar um alerta */}
      {/* <button onClick={chamarMsg} >Clique aqui</button> */}
    </>
  )
}

export default Propriedade
