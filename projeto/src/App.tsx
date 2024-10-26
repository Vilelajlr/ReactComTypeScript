import { useState } from 'react'
import './App.css'

function App() {


  const [nome, setNome] = useState("");
  const [inputAno, setInputAno] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [soma, setSoma] =  useState(0)
  const [nomes, setNomes] = useState("")



  function handleIdade(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    let anoAtual = new Date().getFullYear()
    setSoma(anoAtual - Number(inputAno));
    setIsActive(true)
    setNomes(nome)
    setNome("")
    setInputAno("")


  }


  return (
    <div className='containerPrincipal'>

      <h1 className='title'>
          Descubra sua idade
      </h1>
      <form onSubmit={handleIdade}>
        <p>Digite seu nome?</p>
        <input 
          type="text"
          placeholder='Digite seu nome'
          value={nome}
          onChange={ (e) => setNome(e.target.value)}
          required
        />

        <p>Digite o ano que nasceu?</p>
        
        <input 
          type="text"
          placeholder='Digite seu nome'
          value={inputAno}
          onChange={ (e) => setInputAno(e.target.value)}
          required
        />

        <input type="submit" value='Descobrir Idade' />
      

      </form>

      { isActive !== false && <h1 className='nomes'>
        Olá, {nomes}, você tem {soma} anos
      </h1> }


    </div>
  )
}

export default App
