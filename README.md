# 📚 BraLib

BraLib é uma plataforma para compra e gerenciamento de livros digitais (PDF), desenvolvida como projeto de estudo para Engenharia de Software.

O objetivo do projeto é aplicar conceitos modernos de desenvolvimento Back-end utilizando Java e Spring Boot, simulando um sistema real de e-commerce de livros digitais.

---

# 🎯 Objetivos

Este projeto busca praticar:

- Java
- Spring Boot
- REST API
- MySQL
- Docker
- Git
- JPA/Hibernate
- Spring Security
- JWT
- Design Patterns
- SOLID
- Testes Unitários
- Documentação com Swagger

---

# 🛠 Tecnologias

## Back-end

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- Maven

## Banco

- MySQL

## Ferramentas

- Docker
- Docker Compose
- Postman
- IntelliJ IDEA
- Git
- GitHub

---

# 👥 Tipos de usuário

## Cliente

Pode:

- Criar conta
- Fazer login
- Comprar livros
- Visualizar biblioteca
- Ler PDFs
- Editar perfil

---

## Administrador

Pode:

- Gerenciar livros
- Gerenciar autores
- Gerenciar categorias
- Gerenciar usuários
- Fazer upload de PDFs
- Fazer upload de capas
- Alterar preços

---

# 📚 Funcionalidades

## Autenticação

- Cadastro
- Login
- JWT
- Logout (opcional)

---

## Livros

- Listar livros
- Buscar por título
- Buscar por autor
- Buscar por categoria
- Visualizar detalhes
- Comprar livro

---

## Biblioteca

- Visualizar livros comprados
- Abrir PDF
- Download do PDF

---

## Administração

CRUD de:

- Livros
- Autores
- Categorias

---

# 📂 Estrutura prevista

```
controller
service
repository
entity
dto
mapper
config
security
exception
util
```

---

# 🗄 Modelo inicial do banco

Usuario

- id
- nome
- email
- senha
- role

Livro

- id
- titulo
- descricao
- preco
- pdf
- capa
- categoria
- autor

Autor

- id
- nome

Categoria

- id
- nome

Compra

- id
- usuario
- livro
- dataCompra
- valor

---

# 📋 Requisitos Funcionais

## RF001

O sistema deve permitir cadastro de usuários.

---

## RF002

O sistema deve permitir login utilizando e-mail e senha.

---

## RF003

O sistema deve listar todos os livros disponíveis.

---

## RF004

O sistema deve permitir pesquisar livros.

---

## RF005

O usuário poderá comprar livros.

---

## RF006

Após a compra o livro deverá aparecer na biblioteca do usuário.

---

## RF007

O administrador poderá cadastrar novos livros.

---

## RF008

O administrador poderá editar livros.

---

## RF009

O administrador poderá excluir livros.

---

## RF010

O administrador poderá cadastrar autores.

---

## RF011

O administrador poderá cadastrar categorias.

---

## RF012

O administrador poderá enviar um PDF para cada livro.

---

# 🔒 Requisitos Não Funcionais

- API REST
- Utilizar JWT
- Banco MySQL
- Docker Compose
- Código seguindo SOLID
- Utilizar Design Patterns quando aplicável
- Documentação via Swagger
- Testes unitários

---

# 📖 Histórias de Usuário

## HU001

Como visitante,

quero criar uma conta,

para comprar livros.

---

## HU002

Como usuário,

quero fazer login,

para acessar minha biblioteca.

---

## HU003

Como usuário,

quero pesquisar livros,

para encontrar um livro específico.

---

## HU004

Como usuário,

quero comprar um livro,

para poder lê-lo.

---

## HU005

Como usuário,

quero acessar meus livros,

para ler quando desejar.

---

## HU006

Como administrador,

quero cadastrar livros,

para disponibilizá-los aos clientes.

---

## HU007

Como administrador,

quero editar livros,

para manter as informações atualizadas.

---

## HU008

Como administrador,

quero excluir livros,

para remover conteúdos indisponíveis.

---

## HU009

Como administrador,

quero cadastrar categorias,

para organizar os livros.

---

## HU010

Como administrador,

quero cadastrar autores,

para relacioná-los aos livros.

---

# 🚀 Roadmap

## Fase 1

- [ ] Configuração do projeto
- [ ] MySQL
- [ ] Docker
- [ ] Spring Boot

---

## Fase 2

- [ ] CRUD Usuários
- [ ] CRUD Livros
- [ ] CRUD Categorias
- [ ] CRUD Autores

---

## Fase 3

- [ ] Login
- [ ] JWT
- [ ] Spring Security

---

## Fase 4

- [ ] Compra de livros
- [ ] Biblioteca
- [ ] Download de PDF

---

## Fase 5

- [ ] Upload de capa
- [ ] Upload de PDF
- [ ] Busca
- [ ] Paginação

---

## Fase 6

- [ ] Testes
- [ ] Swagger
- [ ] Logs
- [ ] Docker Compose

---

# 📈 Melhorias futuras

- Favoritos
- Avaliações
- Sistema de comentários
- Lista de desejos
- Carrinho de compras
- Cupons de desconto
- Dashboard administrativo
- Relatórios de vendas
- Cache com Redis
- Deploy na AWS
- CI/CD com GitHub Actions
