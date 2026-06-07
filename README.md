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
├── .github/
│   └── workflows/
│       └── pipeline.yml        # Pipeline de CI com self-hosted runner
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

## 🔄 Integração Contínua (CI) — Exercício 3

### O que é um Self-Hosted Runner?

Por padrão, plataformas de CI/CD como o GitHub Actions executam os jobs em **máquinas virtuais gerenciadas na nuvem** (cloud runners). Um **self-hosted runner** é uma máquina **própria** — local, servidor corporativo ou VM — registrada na plataforma para executar os jobs da pipeline.

**Arquitetura deste projeto:**

```
Máquina Local (Windows)
└── GitHub Actions Runner (processo local)
    └── Executa: npm install → npm test → npm run mochawesome
              ↕  comunica via HTTPS
GitHub.com
└── .github/workflows/pipeline.yml  (runs-on: self-hosted)
```

---

### 🤔 Quando faz sentido usar Self-Hosted Runner?

| Situação | Motivo |
|----------|--------|
| 🔒 Dados ou código sensível | O build não sai da rede interna |
| 🖥️ Hardware específico | GPU, dispositivos ARM, iOS/Android físicos |
| 💸 Alto volume de builds | Runners cloud cobram por minuto |
| ⚡ Cache local | `node_modules` e Docker layers persistem entre builds |
| 🏢 Serviços internos | Acesso a APIs ou bancos de dados sem VPN |

**Quando NÃO usar:**
- Projetos open source (runners gratuitos já são suficientes)
- Times sem infraestrutura para manter servidores
- Projetos com builds simples e baixa frequência

---

### 🌐 Comparativo entre Plataformas

| Plataforma | Recurso Equivalente | Observação |
|------------|---------------------|------------|
| **GitHub Actions** | Self-Hosted Runner | Suporta Linux, Windows, macOS |
| **GitLab CI/CD** | GitLab Runner (self-managed) | Suporta Docker, Shell, Kubernetes |
| **CircleCI** | Self-Hosted Runner | Disponível no plano Free |
| **Azure DevOps** | Self-Hosted Agent | Integrado ao Azure Pipelines |
| **Bitbucket Pipelines** | Runners (self-hosted) | Disponível em todos os planos |
| **Jenkins** | Agent/Node | Jenkins **é** self-hosted por natureza |

---

### ⚙️ Configuração do Self-Hosted Runner (Windows)

#### 1. Criar diretório e baixar o runner

```powershell
mkdir C:\actions-runner
cd C:\actions-runner
Invoke-WebRequest -Uri https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-win-x64-2.323.0.zip -OutFile actions-runner-win-x64.zip
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory("$PWD\actions-runner-win-x64.zip", "$PWD")
```

#### 2. Obter o token de registro

No GitHub: **Settings → Actions → Runners → New self-hosted runner → Windows**

#### 3. Registrar o runner

```powershell
.\config.cmd --url https://github.com/jasminyproenca/exercicio-com-laco --token <SEU_TOKEN>
```

#### 4. Iniciar o runner

```powershell
# Rodar manualmente (sessão única)
.\run.cmd

# OU instalar como serviço do Windows (recomendado)
.\svc.cmd install
.\svc.cmd start
```

---

## 🛠️ Tecnologias

- **JavaScript (ES Modules)**
- **Node.js**
- **Mocha** — framework de testes
- **Mochawesome** — gerador de relatórios de testes em HTML
- **GitHub Actions** — plataforma de CI/CD com self-hosted runner
