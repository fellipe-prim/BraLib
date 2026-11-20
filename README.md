# BraLib

BraLib é uma plataforma de livraria digital onde usuários podem navegar pelo catálogo de livros, realizar compras e acessar sua biblioteca pessoal com os títulos adquiridos.

O projeto possui uma aplicação web desenvolvida em React e uma API em PHP, utilizando MySQL como banco de dados. O ambiente do backend é gerenciado pelo Docker, facilitando a configuração e execução em diferentes computadores.

## Tecnologias

### Front-end
- React
- Vite
- Tailwind CSS
- JavaScript

### Back-end
- PHP 8.4
- MySQL 8.0
- PDO (PHP Data Objects)

### Infraestrutura
- Docker
- Docker Compose

## Funcionalidades

O projeto contempla as seguintes funcionalidades, algumas ainda em desenvolvimento:

- Visualização do catálogo de livros
- Pesquisa de livros
- Visualização dos detalhes de cada livro
- Carrinho de compras
- Finalização de pedidos
- Cadastro e autenticação de usuários
- Biblioteca pessoal com livros adquiridos
- Gerenciamento de livros

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Git
- Docker Desktop (com Docker Compose)
- Node.js e npm

**Não é necessário instalar PHP ou MySQL localmente**, pois ambos são executados em containers Docker.

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/primf/BraLib.git
cd BraLib
```

### 2. Configurar as variáveis de ambiente

Acesse a pasta do backend:

```bash
cd backend
```

Crie um arquivo `.env` a partir do `.env.example`.

No Windows (PowerShell):

```powershell
Copy-Item .env.example .env
```

No Linux ou macOS:

```bash
cp .env.example .env
```

Abra o arquivo `.env` e configure as senhas:

```env
DB_HOST=mysql
DB_NAME=bralib
DB_USER=root
DB_PASSWORD=sua_senha
MYSQL_ROOT_PASSWORD=sua_senha
```

As duas senhas devem ser iguais, pois a conexão utiliza o usuário `root` do MySQL.

O arquivo `.env` não deve ser enviado ao GitHub.

### 3. Iniciar o backend e o banco de dados

Com o Docker Desktop aberto, execute na pasta `backend`:

```bash
docker compose up -d --build
```

Esse comando:

- Constrói a imagem do PHP 8.4 com suporte ao MySQL.
- Inicia o container do backend PHP.
- Inicia o container MySQL 8.0.
- Cria o banco de dados `bralib`.
- Executa automaticamente o script `database/init.sql` na primeira inicialização de um banco vazio, criando as tabelas necessárias.

Para verificar os containers:

```bash
docker compose ps
```

O backend estará disponível em:

**http://localhost:8000**

A rota inicial da API retorna os livros cadastrados em formato JSON. Caso o banco ainda não possua livros, a resposta será:

```json
[]
```

### 4. Iniciar o frontend

Abra outro terminal e, a partir da raiz do projeto, acesse:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá o endereço de acesso, normalmente:

**http://localhost:5173**

### 5. Encerrar os containers

Para parar o backend e o banco de dados, execute na pasta `backend`:

```bash
docker compose down
```

Os dados do MySQL serão preservados no volume Docker.

Para iniciar novamente:

```bash
docker compose up -d
```

**Atenção:** o comando `docker compose down -v` também remove o volume do banco de dados, apagando os dados armazenados. Utilize-o apenas quando quiser reinicializar o banco.

## Estrutura do projeto

```text
BraLib/
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── database.php
│   ├── controllers/
│   │   └── LivroController.php
│   ├── database/
│   │   └── init.sql
│   ├── .env.example
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── index.php
│
├── .gitignore
└── README.md
```

## Banco de dados

O BraLib utiliza MySQL e possui quatro tabelas principais:

| Tabela | Descrição |
|---|---|
| `usuario` | Armazena os dados dos usuários |
| `livro` | Armazena os livros disponíveis no catálogo |
| `pedido` | Registra os pedidos realizados pelos usuários |
| `item_pedido` | Relaciona os livros aos pedidos |

Os relacionamentos são realizados por meio de chaves estrangeiras, garantindo a integridade dos dados.

O script de criação das tabelas está disponível em `backend/database/init.sql`.

## Status do projeto

**Em desenvolvimento.**

O ambiente Docker, a conexão com MySQL e a consulta de livros pela API já foram configurados e testados. As demais funcionalidades estão sendo implementadas gradualmente.

## Disclaimer — Uso de Inteligência Artificial

Este projeto foi desenvolvido com fins de estudo, prática e aprimoramento das minhas habilidades em desenvolvimento de software.

Durante o desenvolvimento, utilizei ferramentas de Inteligência Artificial como apoio em determinadas atividades, incluindo configuração do ambiente Docker, resolução de problemas técnicos, esclarecimento de conceitos e sugestões de melhorias.

A IA foi utilizada como ferramenta auxiliar de aprendizado, não como substituta do processo de desenvolvimento. O objetivo do BraLib é aplicar conhecimentos, experimentar tecnologias e adquirir experiência prática na construção de uma aplicação web completa.