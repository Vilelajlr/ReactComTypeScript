import { useState } from 'react';
import './App.css';


interface InfoAlunoProps{
  nome: string;
  idade: string;
}



export default function App(){
  const [input, setInput] = useState('');
  const [idade , setIdade] = useState('');

  const [contador, setContador] = useState(0);

  const [estadoButton, setEstadoButton] = useState("Entrar")
  const [user, setUser] = useState("visitante")

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  
  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: idade
    })
  }


  function incrementar(){
    setContador(valorAtual => valorAtual + 1)
  }

  function decrementar(){

    if(contador === 0){
      return;
    }
    setContador(valorAtual => valorAtual - 1)
  }


  function handleLogin(){
    if(estadoButton === "entrar"){
      setEstadoButton("Fazer Logout")
      setUser(input)
    }else{
      setEstadoButton("entrar")
      setUser("Visitante")
    }
  }


  return(
    <div>
        <h1>Conhecendo useState</h1>

        <input 
          placeholder="Digite o nome"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br/><br />

        <input 
    
          placeholder='Digite a idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}  
        />

        <br /><br />

        <button className='contagem' onClick={mostrarAluno}>Mostrar Aluno</button>

        <h3>Bem vindo: {infoAluno?.nome}</h3>
        <h4>Idade: {infoAluno?.idade}</h4>

        <hr />
        <br /><br />

        <div className='meio'>
          <h2>Contador com useState</h2>
          <p>{ contador }</p>
          <div>
            <button className='contagem' onClick={decrementar}>-</button>
            <button className='contagem' onClick={incrementar}>+</button>
          </div>
        </div>

        <br />
        <br />
      <hr />
      
      <h1>
        Conhecendo o useState
      </h1>

      <button className='contagem' onClick={handleLogin}>
        {estadoButton}
      </button>

      <h4>Olá, {user}</h4>     

        
    </div>
  )
}

