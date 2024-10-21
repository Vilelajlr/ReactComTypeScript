import { useState, useEffect, useRef, useMemo, useCallback  } from 'react'


export default function App() {

  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
    enabled: false,
    tasks: ''
  })

  


  useEffect(() => {
      const tarefasSalvas = localStorage.getItem("@cursoreact")
      if(tarefasSalvas){
        setTasks(JSON.parse(tarefasSalvas))
      }
  }, [])


  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
      return;
    }

    localStorage.setItem("@cursoreact", JSON.stringify(tasks))

  }, [tasks])




  const handleRegister = useCallback(() => {
    if(!input){
      alert("Preencha o nome da sua tarefa!")
      return;
    }

    if(editTask.enabled){
      
      handleSaveEdit();
      setInput("")
  
      return;
    }

    setTasks(tarefas => [...tarefas, input])
    setInput("")
  }, [input, tasks])


 

  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex(task => task === editTask.tasks)
    const allTasks = [...tasks]

    allTasks[findIndexTask] = input;
    setTasks(allTasks)

    setEditTask({
      enabled: false,
      tasks: ""
    })
    

  }

  function handleDelete(item: string){
    const removeTask = tasks.filter( task => task !== item )
    setTasks(removeTask)

  }

  function handleEdit(item: string){

    inputRef.current?.focus();

    setInput(item)
    setEditTask({
      enabled: true,
      tasks: item
    })
  }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])


  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input 
        placeholder='Digite o nome da tarefa...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enabled ? "Editar" : "Adicionar"}
      </button>



      <hr />

      <strong>Você tem {totalTarefas} tarefas </strong>
      <br /><br />

      {
        tasks.map((item, index) => (
          <section key={item}>
            <span>              
              {item}
            </span>
            <button onClick={ () => handleEdit(item) }>Editar</button>
            <button onClick={ () => handleDelete(item) }>excluir</button>
          </section>
        ))
      }


    </div>    
  )
}

