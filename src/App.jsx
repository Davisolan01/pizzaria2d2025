import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  const Formulario = () => {

    return (
      <>
        <h3>Formulário</h3>
        <input
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      
      type="text" />

      <button
      className="botao"
      onClick={()=>{alert(nome)}}
      >
      clique aqui

      </button>
      </>
    )
  }

  return (
    <div>

      <h3>pizzaria 2d </h3>
      <Formulario/>
      <Formulario/>
      <Formulario/>
      
    </div>
  )
}
export default App     