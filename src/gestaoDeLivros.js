/*
Exercício:
Criar um vetor com 5 livros: ID, titulo, tema, preco.

[BASICO]
1-Crie uma função que receba o ID de um livro e retorne o seu titulo. 
- Exemplo de chamada da função:
buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'
2-Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID.

- Decomposição:

Entradas:
- Vetor com 5 livros (cada livro com ID, Titulo, Tema, Preco) OK
- ID do livro a buscar (number) OK

Regras:
- Cada livro possui um ID único OK
- A busca deve ser por ID exato OK
- Se o livro não existir, retornar mensagem de erro

Processamento:
- Percorrer o vetor de livros OK
- Comparar o ID do livro atual com o ID buscado OK
- Se encontrar correspondência, retornar o titulo OK
- Se nenhum livro com esse ID for encontrado, retornar undefined

Saída:
- String com o titulo do livro encontrado
- Undefined se nenhum livro com esse ID existir
*/

// Criando o Vetor:
const livros = [ 
    {
       id: 1,
       titulo: 'Harry Potter e a Pedra Filosofal',
       tema: 'Fantasia',
       preco: 39.90
    },
    {
       id: 2,
       titulo: 'É assim que acaba',
       tema: 'Romance',
       preco: 43.14
    },

    {
       id: 3,
       titulo: 'A empregada',
       tema: 'Suspense',
       preco: 41.99
    },
    {
       id: 4,
       titulo: 'O Exorcista',
       tema: 'Terror',
       preco: 58.10
    },
    {
       id: 5,
       titulo: 'Os Miseraveis',
       tema: 'Classico',
       preco: 133.47
    },
];

// Criando a Função:

export function recebeIdRetornaLivro(id) {
    if (!id || id <= 0){
        throw new Error ('O ID precisa ser informado e precisa ser maior que zero!')
    }
     
    for (let i = 0; i < livros.length; i++){
        if (livros[i].id == id){
            return livros[i].titulo;
        }
    }
    throw new Error('ID não encontrado!')// id não encontrado
}

// Testando a função (fora dela):
// console.log(recebeIdRetornaLivro(1));  // Mostra o título do livro com ID 1 - Existente
// console.log(recebeIdRetornaLivro(5));  // Mostra o título do livro com ID 5 - Existente
// console.log(recebeIdRetornaLivro(9));  // Error com ID 9 - Não existente
// console.log(recebeIdRetornaLivro(''));  // Error com ID vazio