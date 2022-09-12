<br />
<div align="center">
  <img src="assets/logo.png" alt="Logo" width="120" height="120">

  <h3 align="center">Dental Simulator API</h3>
  <p align="center">
    Dental Simulator API é uma API REST de gerenciamento de atendimentos de um consultório odontológico, sendo possível criar e listar atendimentos. Cada atendimento possui um cliente, um tratamento odontológico e uma data de atendimento relacionados à ele.
  </p>
  <br />
  <br />
  <p><img src="https://camo.githubusercontent.com/a1eae878fdd3d1c1b687992ca74e5cac85f4b68e60a6efaa7bc8dc9883b71229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/7f73136d92799b19be179d1ed87b461120c35ed917c7d5ab59a7606209da7bd3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465" /><img src="https://camo.githubusercontent.com/3bcc8da5c94cefdf2d976837d1be601f4d44d36b58d9590e36debe834a6e34de/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4865726f6b752d3433303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465" /></p>
</div>
<br />
<br />

## Conteúdos:

- Projeto
  - [Sobre](#sobre)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Banco de Dados](#banco-de-dados)
  - [Inicialize a Aplicação](#inicialize-a-aplicação)
  - [Deploy da Aplicação](#deploy-da-aplicação)
  - [API Reference](#api-reference)
- Processos e Aprendizados
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Principais aprendizados](#principais-aprendizados)
- [Autor](#autor)

<br />
<br />

# Projeto:

## Sobre

- Arquitetar e desenvolver uma API para gerenciamento de atendimentos odontológicos (com Sequelize ORM);
- Criar *endpoints* (seguindo os princípios REST) que serão utilizados para conexão com o banco de dados;
- Lidar com erros (mesagens e *status code* específicos);
- Criar tabelas e respectivas associações: *Client*, *Treatment*, *Attendance*, *Installment*;

## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/)

## Instalação

- Clone o repositório:
  ```bash
  git clone git@github.com:Fernanda9421/dental_simulator_backend.git
  ```
- Acesse o repositório:
  ```bash
  cd dental_simulator_backend
  ```
- Instale as dependências:
  ```bash
  npm install
  ```

## Variáveis de Ambiente

  Para rodar esse projeto localmente, você precisará configurar as variáveis de ambiente.

- Na raiz do projeto, renomeie o arquivo `.env.example` para `.env`
- Dentro dele, insira as seguintes informações:

```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=dental_simulator
HOSTNAME=localhost
```

## Banco de Dados

- Crie o Banco de Dados:
  ```bash
  npm run create
  ```
- Crie as tabelas no Banco de Dados:
  ```bash
  npm run migrate
  ```
- Popule o Banco de Dados:
  ```bash
  npm run seed
  ```
- Caso precise **excluir** o Banco de Dados:
  ```bash
  npm run drop
  ```

## Inicialize a aplicação

  Para rodar a aplicação, digite o comando no terminal:
  ```bash
  npm start
  ```

## Deploy da Aplicação
O *deploy* da aplicação foi feito utilizando a plataforma **Heroku**.

- Listar todos as consultas:
  - [https://dental-simulator-backend.herokuapp.com/appointment](https://dental-simulator-backend.herokuapp.com/appointment)

- Listar todos os pagamentos:
  - [https://dental-simulator-backend.herokuapp.com/payment](https://dental-simulator-backend.herokuapp.com/payment)

- Listar todos os tratamentos:
  - [https://dental-simulator-backend.herokuapp.com/treatment](https://dental-simulator-backend.herokuapp.com/treatment)

## *API Reference*

```http
GET /payment
```

- Lista todas as parcelas disponíveis para pagamento.

---
<br />

```http
POST /payment
```

- Lista as parcelas filtradas pelas datas de vencimento.

- Corpo da requisição:
```json
{
  "startDate": "2022-08-01",
  "endDate": "2022-09-01"
}
```

---
<br />

```http
GET /appointment
```

- Lista todas os atendimentos realizados.

---
<br />

```http
POST /appointment
```

- Cadastra um novo atendimento.

- Corpo da requisição:
```json
{
  "clientName": "Rodrigo Santoro",
  "treatment": "Branqueamento",
  "installments": [1, 2],
  "attendanceDate": "2022-09-08",
  "dueDate": "2022-10-10"
}
```

---
<br />

```http
GET /treatment
```

- Lista todos os tratamentos disponíveis.

---
<br />

```http
POST /treatment/register
```

- Cadastra um novo tratamento.

- Corpo da requisição:
```json
{
  "name": "Lente de contato",
  "totalPrice": 2560.00
}
```

---
<br />

# Processos e Aprendizados:

## Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Principais aprendizados
Nesse projeto, tive a oportunidade de praticar a arquitetura MSC (Model, Service, Controller), utilizando o Sequelize.

Utilizei o PostgreSQL (sistema de gerenciamento de dados objeto relacionais) pela primeira vez, e pude notar a facilidade de trocar de sistema quando se usa uma ORM.

Pude praticar a criação de *models*, *migrations* e *seeders*, e como relacionar as tabelas do banco de dados.

# Autor:
- [Linkedin](https://www.linkedin.com/in/fernandaacarvalho/)
- [Github](https://github.com/Fernanda9421)