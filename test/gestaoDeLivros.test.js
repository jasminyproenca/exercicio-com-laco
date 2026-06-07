import { recebeIdRetornaLivro } from '../src/gestaoDeLivros.js';
import assert from 'node:assert';

describe ('Testando Funções de Gestão de Livros', function() {
    it('Teste 1: Retornar o Titulo do Livro quando o ID for encontrado', function() {
        // Arrange
        const idDoLivroInformado = 1; // numero magico em programcao
        const buscarTituloDoLivroPorID = 'Harry Potter e a Pedra Filosofal';
        
        // Act
        const retornaDaFuncao = recebeIdRetornaLivro(idDoLivroInformado);
        
        // Assert
        assert.equal(retornaDaFuncao, buscarTituloDoLivroPorID);
    });
    it('Teste 2: Retornar um Erro quando o ID não for encontrado', function() {
        // Arrange
        const idDoLivroInformado = 8;

        // Act e Assert
        assert.throws(
            function() { recebeIdRetornaLivro (idDoLivroInformado)},
            {
                message: 'ID não encontrado!'
            }
        );
    });
    it('Teste 3: Retornar um Erro quando o ID não for informado', function() {
        // Arrange
        const idDoLivroInformado = '';

        // Act e Assert
        assert.throws(
            function() { recebeIdRetornaLivro (idDoLivroInformado)},
            {
                message: 'O ID precisa ser informado e precisa ser maior que zero!'
            }
        );
    });
    it('Teste 4: Retornar um Erro quando o ID for nulo', function() {
        // Arrange
        const idDoLivroInformado = null;

        // Act e Assert
        assert.throws(
            function() { recebeIdRetornaLivro (idDoLivroInformado)},
            {
                message: 'O ID precisa ser informado e precisa ser maior que zero!'
            }
        );
    });
    it('Teste 5: Retornar um Erro quando o ID for igual a 0', function() {
        // Arrange
        const idDoLivroInformado = 0;

        // Act e Assert
        assert.throws(
            function() { recebeIdRetornaLivro (idDoLivroInformado)},
            {
                message: 'O ID precisa ser informado e precisa ser maior que zero!'
            }
        );
    });
});