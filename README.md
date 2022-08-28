## Dental Simulator API

<details>
  <summary>Variáveis de Ambiente</summary>

  Para rodar esse projeto localmente, você precisará configurar as variáveis de ambiente.
  - Na raiz do projeto, crie uma arquivo nomeado como `.env`;
  - Dentro dele, insira as seguintes informações:
  ```
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  DB_DATABASE=dental_simulator
  HOSTNAME=localhost
  ```
</details>

<details>
  <summary>Instalação</summary>

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
</details>

<details>
  <summary>Banco de Dados</summary>

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
</details>

<details>
  <summary>Inicialize a aplicação</summary>

  Para rodar a aplicação, digite o comando no terminal:
  ```bash
  npm start
  ```
</details>
