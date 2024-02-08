const perguntas = [
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
    respostas: ["if", "let", "fetch",],
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

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) // esta clonando o template
  quizItem.querySelector("h3").textContent = item.pergunta // modificando o h3

  for (let resposta of item.respostas) { 
    const dt = quizItem.querySelector("dl dt").cloneNode(true) // clonando as respostas e apresentando elas na tela
    dt.querySelector("span").textContent = resposta

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
