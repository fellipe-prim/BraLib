# 📚 BraLib

Sistema de biblioteca digital desenvolvido para gerenciar venda, compra e acesso a livros digitais.

O objetivo do projeto é aplicar conceitos de desenvolvimento backend, banco de dados, arquitetura de software e integração entre frontend e backend, utilizando tecnologias próximas das utilizadas no mercado.

---

# 🚀 Objetivo do Projeto

O BraLib permite que usuários visualizem livros disponíveis na plataforma, realizem compras simuladas e tenham acesso aos livros adquiridos através de uma biblioteca digital pessoal.

O projeto também possui uma área administrativa para gerenciamento dos livros disponíveis na plataforma.

---

# 🛠️ Tecnologias Utilizadas

## Backend
- Java
- Spring Boot
- Spring Data JPA / Hibernate
- API REST
- Maven

## Banco de Dados
- MySQL
- Docker

## Frontend
- React
- Tailwind CSS

## Ferramentas
- Git
- GitHub
- IntelliJ IDEA
- Postman

---

# 🏗️ Arquitetura do Projeto

O BraLib será desenvolvido seguindo uma arquitetura em camadas, separando responsabilidades entre interface, regras de negócio e persistência de dados.

Fluxo da aplicação:

```
Frontend (React + Tailwind)
            |
            ↓
        API REST
            |
            ↓
Backend (Spring Boot + Java)
            |
            ↓
Banco de Dados (MySQL)
```

## Frontend

Responsável pela interface do usuário, permitindo a navegação pela plataforma, visualização dos livros, gerenciamento da conta e acesso aos livros adquiridos.

Tecnologias utilizadas:

- React
- Tailwind CSS

---

## Backend

Responsável pelas regras de negócio da aplicação, gerenciamento dos usuários, livros, compras e comunicação com o banco de dados.

Tecnologias utilizadas:

- Java
- Spring Boot
- Spring Data JPA / Hibernate
- API REST

---

## Banco de Dados

Responsável pelo armazenamento das informações da aplicação, como usuários cadastrados, livros disponíveis e registros de compras.

Tecnologia utilizada:

- MySQL

---

# 📌 Funcionalidades

## Usuário

- Cadastro e login
- Visualização de livros disponíveis
- Compra simulada de livros
- Visualização dos livros adquiridos
- Acesso aos PDFs dos livros comprados

---

## Administrador

- Cadastro de livros
- Atualização de informações dos livros
- Remoção/desativação de livros
- Gerenciamento do catálogo

---

# 🗄️ Modelo do Banco de Dados

O banco de dados foi desenvolvido utilizando um modelo relacional, separando as principais entidades do sistema e seus relacionamentos.

---

# 👤 USUARIO

A tabela `USUARIO` armazena os dados dos usuários cadastrados no sistema.

Campos principais:

```
id BIGINT PK
nome VARCHAR(100)
email VARCHAR(150)
senha VARCHAR(255)
data_cadastro DATETIME
tipo_usuario ENUM
```

O campo `tipo_usuario` diferencia usuários comuns de administradores.

Um usuário pode possuir vários livros comprados.

---

# 📖 LIVRO

A tabela `LIVRO` representa os livros disponíveis na plataforma.

Campos principais:

```
id BIGINT PK
titulo VARCHAR(200)
autor VARCHAR(150)
descricao TEXT
preco DECIMAL(10,2)
pdf_path VARCHAR(255)
data_cadastro DATETIME
ativo BOOLEAN
```

O campo `pdf_path` armazena o caminho do arquivo PDF que será disponibilizado após a compra.

Um livro pode ser comprado por diversos usuários.

---

# 🛒 LIVROS_COMPRADOS

A tabela `LIVROS_COMPRADOS` representa a relação entre usuários e livros adquiridos.

Ela registra qual usuário comprou qual livro e quando a compra ocorreu.

Campos principais:

```
id BIGINT PK
usuario_id BIGINT FK
livro_id BIGINT FK
data_compra DATETIME
```

Exemplo:

```
Usuário: Fellipe
Livro: Clean Code
Data: 30/09/2026
```

Essa tabela permite que o sistema saiba quais livros cada usuário possui e controle o acesso aos PDFs.

---

# 🔗 Relacionamentos

## USUARIO → LIVROS_COMPRADOS

Um usuário pode comprar vários livros.

```
USUARIO 1 -------- N LIVROS_COMPRADOS
```

---

## LIVRO → LIVROS_COMPRADOS

Um livro pode ser comprado por vários usuários.

```
LIVRO 1 -------- N LIVROS_COMPRADOS
```

---

# 🔄 Fluxo de Compra

```
Usuário visualiza livros
          |
          ↓
Seleciona um livro
          |
          ↓
Compra simulada
          |
          ↓
Registro criado em LIVROS_COMPRADOS
          |
          ↓
Livro aparece na biblioteca do usuário
          |
          ↓
Usuário acessa o PDF
```

---

# 📂 Estrutura prevista do Projeto

```
BraLib
│
├── backend
│   ├── src/main/java
│   │   └── com.bralib.backend
│   │       ├── controller
│   │       ├── service
│   │       ├── repository
│   │       ├── entity
│   │       └── dto
│   │
│   └── pom.xml
│
├── frontend
│   ├── src
│   └── package.json
│
└── README.md
```

---

# 📈 Próximos Passos

- [x] Configuração inicial do Spring Boot
- [x] Criação do repositório Git
- [x] Modelagem inicial do banco de dados
- [ ] Configuração do MySQL com Docker
- [ ] Criação das entidades JPA
- [ ] Desenvolvimento das APIs REST
- [ ] Implementação da autenticação
- [ ] Desenvolvimento do frontend
- [ ] Integração completa frontend/backend
- [ ] Deploy da aplicação

---

# 👨‍💻 Desenvolvedor

Projeto desenvolvido por Fellipe Prim com objetivo de estudo e construção de portfólio em Engenharia de Software.
