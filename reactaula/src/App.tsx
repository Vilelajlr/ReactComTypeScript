import { useState } from 'react'

import logoImg from './assets/logo.png'
import './App.css'

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoria, setCategoria] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Comece onde você está, use o que você tem e faça o que você pode.',
        'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
        'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
        'Não importa que você vá devagar, contanto que você não pare.',
        'A inspiração existe, porém temos que encontrá-la trabalhando.',
        'Coragem é saber o que não temer.',
        'Conhecer a si mesmo é o começo de toda sabedoria.',
        'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
        'Acredite em milagres, mas não dependa deles.',
        'Não é a carga que o derruba, mas a maneira como você a carrega.',
        'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
        'A vida é 10% o que acontece a você e 90% como você reage a isso.',
        'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.',
        'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.',
        'A felicidade não é algo pronto. Ela é feita das suas próprias ações.'
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Que sua jornada hoje seja cheia de sorrisos e momentos especiais. Bom dia!',
        'Bom dia! Que cada passo que você der hoje o aproxime mais dos seus sonhos!',
        'Comece o dia com gratidão e veja como a sua perspectiva muda. Bom dia!',
        'Sorria para o espelho. Você é a obra-prima mais bonita que já existiu. Bom dia!',
        'A vida é feita de escolhas. Escolha ser feliz hoje. Bom dia!',
        'Bom dia! Abra seu coração para as possibilidades infinitas que este dia oferece.',
        'Que cada momento do seu dia seja repleto de bênçãos e realizações. Bom dia!',
        'Bom dia! Que a luz do sucesso ilumine o seu caminho hoje e sempre.',
        'A cada novo amanhecer, renove suas esperanças e seus sonhos. Bom dia!',
        'Bom dia! Você é mais forte do que imagina e mais capaz do que acredita.',
        'Que o amor guie seus pensamentos e ações hoje. Bom dia!',
        'A gratidão transforma o que temos em suficiente. Seja grato. Bom dia!',
        'Bom dia! Acredite no poder da positividade e nas infinitas possibilidades que o dia oferece.',
        'Lembre-se, cada manhã é uma dádiva. Não a desperdice. Bom dia!',
        'A vida é um presente, e cada novo dia é uma bênção. Aproveite ao máximo. Bom dia!',
        'Que o seu dia seja tão brilhante quanto o sol que nasce pela manhã. Bom dia!',
        'Levante-se e brilhe! O mundo espera para ver a luz extraordinária que você traz. Bom dia!',
        'Acredite nas possibilidades que um novo dia traz. Você é capaz de fazer coisas incríveis. Bom dia!',
        'Cada amanhecer é uma nova oportunidade para recomeçar. Bom dia e aproveite cada momento!',
        'Que hoje seja o dia em que seus sonhos mais ousados começam a se tornar realidade. Bom dia!',
        'Lembre-se, o sucesso começa com a decisão de tentar. Bom dia!',
        'Que a energia positiva do universo esteja ao seu redor. Bom dia!',
        'Bom dia! Seja a luz que ilumina o caminho dos outros hoje.',
        'Que a serenidade acompanhe você, e que cada desafio seja uma chance de aprender. Bom dia!',
        'Cada novo dia é uma página em branco. Escreva uma história incrível. Bom dia!',
        'Que a paz acompanhe você em cada momento deste novo dia. Bom dia!',
        'Aproveite cada momento. A vida é feita de pequenas alegrias. Bom dia!',
        'Bom dia! Que cada desafio seja uma oportunidade de crescimento e aprendizado.',
        'A jornada é tão importante quanto o destino. Aproveite cada passo. Bom dia!',
        'Bom dia! Que seu dia seja repleto de sorrisos e surpresas felizes.',
        'Levante-se com determinação, vá dormir com satisfação. Bom dia!',
        'A vida é curta. Aproveite cada momento e faça valer a pena. Bom dia!',
        'Bom dia! Que sua jornada seja cheia de sucesso e conquistas hoje.',
        'Cada manhã é uma dádiva, uma nova chance de fazer a diferença. Bom dia!',
        'Que este dia seja tão incrível quanto a pessoa maravilhosa que você é. Bom dia!',
        'Bom dia! Acredite em si mesmo e no poder dos seus sonhos.',
        'Abra as janelas da sua alma e deixe a luz do otimismo entrar. Bom dia!',
        'Bom dia! Hoje é o dia perfeito para começar a realizar seus sonhos.'
      ]
    }
  ]


  function handleSwitchCategory(index: number){
    setCategoria(index)
  }

  function gerarFrase(){
    // 0 até o tanto de frases que tiver no array
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoria].frases.length) 

    setTextoFrase(`"${allFrases[categoria].frases[numeroAleatorio]}"`)

    
  }
 

  return (
    <div className='container'>
      <div className='divImg'>
        <img 
          src={logoImg} 
          alt="Logo Frases"
          className='logo'
        />
      </div>

      <h2 className='title'> Categorias</h2>

      <section className='category-area'>
        { allFrases.map( (item,index) => (
          <button 
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoria].nome ? 3 : 0,
              borderColor: "#1fa4db"
              
            }}

            onClick={() => handleSwitchCategory(index)}

          >
              {item.nome}
          </button>
        ))}
      </section>
        
      <button 
        className='button-frase' 
        onClick={gerarFrase}
      >
        Gerar Frase
      </button>


      {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}


    </div>
  )
}

export default App
