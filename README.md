# 📚 Exercício com Laço — Gestão de Livros

Projeto de estudo em JavaScript com foco em **estruturas de repetição (laços)**, **funções** e **testes automatizados de unidade**.

---

## 📖 Descrição

O projeto simula uma pequena biblioteca com 5 livros cadastrados. A partir de um **ID informado**, a função principal percorre o vetor de livros usando um laço `for` e retorna o título correspondente — ou lança um erro caso o ID seja inválido ou não encontrado.

---

## 🗂️ Estrutura do Projeto

```
exercicio-com-laco/
├── src/
│   └── gestaoDeLivros.js       # Lógica principal (vetor de livros + função)
├── test/
│   └── gestaoDeLivros.test.js  # Testes automatizados com Mocha
├── mochawesome-report/         # Relatórios HTML/JSON gerados (ignorado pelo git)
├── .gitignore
├── package.json
└── README.md
```

---

## 📚 Catálogo de Livros

| ID | Título                              | Tema      | Preço    |
|----|-------------------------------------|-----------|----------|
| 1  | Harry Potter e a Pedra Filosofal    | Fantasia  | R$ 39,90 |
| 2  | É assim que acaba                   | Romance   | R$ 43,14 |
| 3  | A empregada                         | Suspense  | R$ 41,99 |
| 4  | O Exorcista                         | Terror    | R$ 58,10 |
| 5  | Os Miseráveis                       | Clássico  | R$ 133,47|

---

## ⚙️ Função Principal

```js
recebeIdRetornaLivro(id)
```

**Entradas:**
- `id` — número inteiro maior que zero

**Saídas:**
- ✅ `string` — título do livro encontrado
- ❌ `Error` — quando o ID é inválido (`null`, `0`, vazio) ou não encontrado

**Exemplos:**
```js
recebeIdRetornaLivro(1);  // → 'Harry Potter e a Pedra Filosofal'
recebeIdRetornaLivro(5);  // → 'Os Miseraveis'
recebeIdRetornaLivro(9);  // → Error: 'ID não encontrado!'
recebeIdRetornaLivro(''); // → Error: 'O ID precisa ser informado e precisa ser maior que zero!'
```

---

## 🧪 Testes Automatizados

Os testes foram escritos com **Mocha** + **assert** nativo do Node.js, seguindo o padrão **AAA (Arrange / Act / Assert)**:

| # | Cenário                                      | Resultado Esperado      |
|---|----------------------------------------------|-------------------------|
| 1 | ID existente (ex: `1`)                       | Retorna o título        |
| 2 | ID inexistente (ex: `8`)                     | Lança `Error`           |
| 3 | ID não informado (string vazia `''`)         | Lança `Error`           |
| 4 | ID nulo (`null`)                             | Lança `Error`           |
| 5 | ID igual a zero (`0`)                        | Lança `Error`           |

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

### Instalação

```bash
npm install
```

### Scripts disponíveis

```bash
# Executar a função principal
npm run funcao

# Rodar os testes com saída padrão no terminal
npm test

# Rodar os testes com relatório HTML (Mochawesome)
npm run mochawesome
```

O relatório HTML é salvo em `mochawesome-report/mochawesome.html`.

---

## 🛠️ Tecnologias

- **JavaScript (ES Modules)**
- **Node.js**
- **Mocha** — framework de testes
- **Mochawesome** — gerador de relatórios de testes em HTML
