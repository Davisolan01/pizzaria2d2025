import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>

      <h3>pizzaria 2d </h3>
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
    </div>
  )
}
export default App     