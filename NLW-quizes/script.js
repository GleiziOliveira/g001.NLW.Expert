const perguntasJavaScript = [
  {
    pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
    respostas: [
      "Exibir uma mensagem de erro",
      "Imprimir dados no console",
      "Criar uma variável",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de valores e tipos",
      "Comparação solta de valores",
      "Atribuição de valores",
    ],
    correta: 0,
  },
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Operation Method",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual palavra-chave declara uma variável em JavaScript?",
    respostas: ["if", "let", "fetch"],
    correta: 1, // Todas as opções são corretas
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que é chamada no início de um programa",
      "Uma função que é passada como argumento para outra função",
      "Uma função que é executada automaticamente",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do método 'querySelector()'?",
    respostas: [
      "Selecionar vários elementos",
      "Selecionar um único elemento",
      "Criar um novo elemento",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário de uma linha",
      "/* Este é um comentário de uma linha */",
      "<!-- Este é um comentário de uma linha -->",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Uma biblioteca para interação com o DOM",
      "Uma forma de manipular strings",
      "Um formato de dados para troca de informações",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é uma expressão regular em JavaScript?",
    respostas: [
      "Um tipo de operador matemático",
      "Um padrão de pesquisa de texto",
      "Um método para converter strings em números",
    ],
    correta: 1,
  },
  {
    pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
    respostas: [
      "Remove um evento de um elemento",
      "Adiciona um evento a um elemento",
      "Define um evento global",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do método 'map()' em JavaScript?",
    respostas: [
      "Iterar sobre os elementos de um array",
      "Modificar os elementos de um array",
      "Criar um novo array baseado em um array existente",
    ],
    correta: 2,
  },
  {
    pergunta: "O que o método 'push()' faz em um array em JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um elemento no final do array",
      "Adiciona um elemento no início do array",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "São a mesma coisa",
      "'null' é atribuído a uma variável não inicializada, enquanto 'undefined' representa a ausência de valor",
      "'undefined' é atribuído a uma variável não inicializada, enquanto 'null' representa a ausência de valor",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é o 'this' em JavaScript?",
    respostas: [
      "Uma palavra-chave que se refere ao contexto global",
      "Uma referência ao objeto pai",
      "Uma referência ao objeto atual",
    ],
    correta: 2,
  },
  {
    pergunta: "O que o método 'split()' faz em JavaScript?",
    respostas: [
      "Combina dois arrays em um",
      "Divide uma string em substrings com base em um separador",
      "Remove elementos específicos de um array",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
    respostas: [
      "Arredonda um número para o inteiro mais próximo",
      "Converte uma string em um número inteiro",
      "Retorna o valor inteiro de um número",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a diferença entre '=='' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas o valor, enquanto '===' compara o valor e o tipo de dado",
      "'==' é uma atribuição, enquanto '===' é uma comparação",
      "'==' compara o valor e o tipo de dado, enquanto '===' compara apenas o valor",
    ],
    correta: 0,
  },
  {
    pergunta: "O que o operador '||' faz em JavaScript?",
    respostas: [
      "Realiza uma operação de OR lógico",
      "Realiza uma operação de AND lógico",
      "Realiza uma operação de negação lógica",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'slice()' em JavaScript?",
    respostas: [
      "Adiciona elementos ao final de um array",
      "Remove elementos de um array",
      "Retorna uma cópia de parte de um array",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é o método 'bind()' em JavaScript?",
    respostas: [
      "Um método para vincular eventos a elementos HTML",
      "Um método para criar uma nova instância de uma função com um contexto específico",
      "Um método para modificar o valor de 'this' dentro de uma função",
    ],
    correta: 1,
  },
]

const perguntasReact = [
  {
    pergunta: "O que é React?",
    respostas: [
      "Uma linguagem de programação",
      "Uma biblioteca JavaScript para construir interfaces de usuário",
      "Um banco de dados",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a principal característica do React?",
    respostas: [
      "Programação orientada a objetos",
      "Componentização",
      "Manipulação de banco de dados",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Como se chama a função usada para renderizar elementos em React?",
    respostas: ["renderComponent()", "updateDOM()", "ReactDOM.render()"],
    correta: 2,
  },
  {
    pergunta: "O que são 'props' em React?",
    respostas: [
      "Funções",
      "Valores de atributos passados para componentes",
      "Eventos de teclado",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a maneira correta de definir um estado inicial em um componente de classe?",
    respostas: [
      "state = { initialValue: '' }",
      "this.state = { initialValue: '' }",
      "state.initialValue = ''",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Em React, qual método é chamado após o componente ser montado no DOM?",
    respostas: [
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidMount",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é JSX em React?",
    respostas: ["JavaScript Extended", "JavaScript XML", "JavaScript XHTML"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a maneira correta de criar um componente funcional em React?",
    respostas: [
      "function MyComponent() {}",
      "class MyComponent extends React.Component {}",
      "const MyComponent = () => {}",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é um 'estado' em React?",
    respostas: [
      "Uma condição do aplicativo no momento da renderização",
      "Uma variável que não pode ser alterada",
      "Uma função assíncrona",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método usado para atualizar o estado em um componente de classe?",
    respostas: ["updateState()", "setState()", "changeState()"],
    correta: 1,
  },
  {
    pergunta: "O que é um 'componente' em React?",
    respostas: [
      "Um arquivo CSS",
      "Um pedaço de código JavaScript que pode ser reutilizado",
      "Uma função de callback",
    ],
    correta: 1,
  },
  {
    pergunta: "Como os componentes podem se comunicar em React?",
    respostas: [
      "Através de e-mails",
      "Através de chamadas de API",
      "Passando 'props'",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é o 'Virtual DOM' em React?",
    respostas: [
      "Um site de mídia social",
      "Uma representação virtual do DOM que React mantém em memória",
      "Um conceito matemático abstrato",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do método 'setState()' em React?",
    respostas: [
      "Alterar o estado do componente",
      "Remover um componente do DOM",
      "Criar um novo componente",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é 'renderização condicional' em React?",
    respostas: [
      "Renderizar um componente com base em uma condição",
      "Renderizar um componente apenas uma vez",
      "Renderizar um componente em uma animação",
    ],
    correta: 0,
  },
  {
    pergunta: "Quais são os dois tipos de componentes em React?",
    respostas: ["Funcionais e de classe", "Públicos e privados", "HTML e CSS"],
    correta: 0,
  },
  {
    pergunta: "Como você adiciona comentários em JSX?",
    respostas: [
      "// Este é um comentário",
      "{/* Este é um comentário */}",
      "<!-- Este é um comentário -->",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é o 'props.children' em React?",
    respostas: [
      "Um nome de propriedade comum",
      "Um componente filho passado de um componente pai",
      "Um valor booleano",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você importa um componente em React?",
    respostas: [
      "import MyComponent from './MyComponent'",
      "include MyComponent from './MyComponent'",
      "require MyComponent from './MyComponent'",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é o 'key' em React?",
    respostas: [
      "Uma propriedade usada para identificar de forma única elementos na renderização de listas",
      "Uma palavra-chave reservada em JavaScript",
      "Um método para criptografar dados",
    ],
    correta: 0,
  },
]

const perguntasNextJS = [
  {
    pergunta: "O que é Next.js?",
    respostas: [
      "Um framework JavaScript para construir interfaces de usuário",
      "Um banco de dados",
      "Um sistema operacional",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a principal característica do Next.js?",
    respostas: [
      "Programação orientada a objetos",
      "Server-side rendering (SSR)",
      "Manipulação de banco de dados",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é 'getStaticProps' em Next.js?",
    respostas: [
      "Uma função para manipular propriedades estáticas",
      "Um método para gerar páginas estáticas",
      "Um hook para acessar props estáticas",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a maneira correta de criar uma nova página em Next.js?",
    respostas: [
      "Criar um arquivo HTML",
      "Definir uma rota em um arquivo de configuração",
      "Criar um arquivo JavaScript ou TypeScript na pasta 'pages'",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é 'getServerSideProps' em Next.js?",
    respostas: [
      "Um método para obter dados do servidor",
      "Um hook para acessar props no lado do servidor",
      "Um middleware para o servidor",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a diferença entre 'getStaticProps' e 'getServerSideProps' em Next.js?",
    respostas: [
      "getStaticProps é para páginas estáticas, enquanto getServerSideProps é para páginas renderizadas no servidor",
      "getStaticProps é para páginas renderizadas no servidor, enquanto getServerSideProps é para páginas estáticas",
      "Não há diferença, são métodos intercambiáveis",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é 'Link' em Next.js?",
    respostas: [
      "Uma tag HTML para links externos",
      "Um componente para criar links entre páginas",
      "Uma função para criar rotas",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o objetivo do arquivo '_app.js' em Next.js?",
    respostas: [
      "Definir estilos globais para a aplicação",
      "Definir rotas da aplicação",
      "Inicializar o servidor",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é 'getStaticPaths' em Next.js?",
    respostas: [
      "Um método para obter dados estáticos",
      "Um hook para acessar caminhos estáticos",
      "Um método para gerar caminhos dinâmicos para páginas estáticas",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função de 'useEffect' em Next.js?",
    respostas: [
      "Manipular o estado da aplicação",
      "Executar efeitos colaterais após a renderização",
      "Criar componentes personalizados",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é 'Image' em Next.js?",
    respostas: [
      "Uma tag HTML para exibir imagens",
      "Um componente para otimizar o carregamento de imagens",
      "Um pacote de manipulação de imagens",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o propósito do arquivo 'next.config.js' em Next.js?",
    respostas: [
      "Configurar o servidor",
      "Definir rotas personalizadas",
      "Configurar o ambiente de compilação",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é 'Dynamic Routing' em Next.js?",
    respostas: [
      "Um método para criar rotas dinâmicas",
      "Um componente para criar rotas",
      "Uma função para processar dados dinâmicos",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função de 'getInitialProps' em Next.js?",
    respostas: [
      "Obter props iniciais para um componente",
      "Definir o estado inicial de um componente",
      "Criar props dinâmicas para um componente",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é 'Incremental Static Regeneration' em Next.js?",
    respostas: [
      "Um método para regenerar estática de forma incremental",
      "Um pacote para incrementar o carregamento estático",
      "Um conceito para atualizar estática sem regenerar toda a aplicação",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é 'API Routes' em Next.js?",
    respostas: [
      "Um método para criar rotas de API",
      "Um componente para gerenciar rotas",
      "Um pacote para manipulação de API",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a diferença entre 'Link' e 'router.push()' em Next.js?",
    respostas: [
      "Link é usado para navegação entre páginas, enquanto router.push() é usado para navegação programaticamente",
      "Link é usado para navegação programaticamente, enquanto router.push() é usado para navegação entre páginas",
      "Não há diferença, ambos são usados para navegação",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é 'fallback' em Next.js?",
    respostas: [
      "Um método para recuperar erros de renderização",
      "Um conceito para lidar com rotas inexistentes",
      "Um hook para manipular erros",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o objetivo do comando 'npm run dev' em um projeto Next.js?",
    respostas: [
      "Compilar o projeto para produção",
      "Iniciar o servidor de desenvolvimento",
      "Executar testes automatizados",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Como você pode adicionar um middleware personalizado em Next.js?",
    respostas: [
      "Criando um arquivo no diretório 'middleware'",
      "Configurando-o no arquivo '_app.js'",
      "Importando-o em cada rota",
    ],
    correta: 1,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

let corretas = new Set()
let totalDePerguntas = 0
const mostrarTotal = document.querySelector("#acertos span")

// Função para renderizar as perguntas
function renderizarPerguntas(perguntas) {
  quiz.innerHTML = "" // Limpa o conteúdo do quiz
  corretas.clear() // Limpa o conjunto de respostas corretas
  totalDePerguntas = perguntas.length
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

  // Loop para cada pergunta
  perguntas.forEach((item, index) => {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta

    // Loop para cada resposta
    item.respostas.forEach((resposta, respostaIndex) => {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute("name", "pergunta-" + index)
      dt.querySelector("input").value = respostaIndex
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
      quizItem.querySelector("dl").appendChild(dt)
    })

    quizItem.querySelector("dl dt").remove()

    // Adiciona a pergunta renderizada ao quiz
    quiz.appendChild(quizItem)
  })
}

// Adiciona event listeners aos botões
const buttons = document.getElementById("buttons")
buttons.addEventListener("click", (event) => {
  if (event.target.id === "javascript") {
    renderizarPerguntas(perguntasJavaScript)
  } else if (event.target.id === "react") {
    renderizarPerguntas(perguntasReact)
  } else if (event.target.id === "nextjs") {
    renderizarPerguntas(perguntasNextJS)
  }
})
