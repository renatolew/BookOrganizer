const livros = require("./database")

// Capturar input do usuário

const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

// Caso responda sim, mostrar categorias e solicitar a categoria desejada. 
// Caso responda não, mostrar todos os livros em ordem crescente de quantidade de páginas.

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:")
    console.log("Psicologia", "/ Terror", "/ Tecnologia", "/ Jogos")

    const entradaCategoria = readline.question("Qual categoria você deseja acessar?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}