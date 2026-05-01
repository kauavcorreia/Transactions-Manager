# 💰 API de Gerenciamento de Renda

Um sistema simples e eficiente de controle financeiro desenvolvido como parte de um desafio back-end. Esta API permite o cadastro de usuários, autenticação segura e o gerenciamento completo de transações financeiras (entradas e saídas), além de fornecer um resumo financeiro detalhado.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e práticas:

- **Linguagem:** TypeScript
- **Framework:** NestJS / Express
- **Banco de Dados:** PostgreSQL (ou MySQL)
- **ORM:** TypeORM / Prisma (especifique o utilizado)
- **Autenticação:** JWT (JSON Web Token)
- **Containerização:** Docker e Docker Compose
- **Testes:** Jest (Testes Unitários e E2E)
- **Documentação:** Swagger / OpenAPI

---

## ⚙️ Funcionalidades

### 👤 Autenticação de Usuários
- Cadastro de novos usuários (Nome, E-mail, Senha).
- Autenticação de usuários com geração de token JWT.
- Hash de senhas utilizando bcrypt para maior segurança.
- Rotas protegidas que exigem autenticação válida.

### 💸 Gerenciamento de Transações
- Criação de transações (Entrada e Saída).
- Listagem de transações do usuário autenticado (com suporte a paginação e filtros).
- Atualização de transações existentes.
- Remoção de transações.

### 📊 Resumo Financeiro
- Endpoint dedicado para retornar o balanço do usuário:
  - Total de entradas.
  - Total de saídas.
  - Saldo final.

---

## 🏗️ Arquitetura e Padrões

O projeto foi estruturado visando escalabilidade, manutenção e clareza, adotando as seguintes práticas:

- **Arquitetura em Camadas:** Separação clara entre Controllers, Services/Use-Cases e Repositories.
- **Injeção de Dependências:** Utilização nativa do NestJS para gerenciar dependências.
- **Validação de Dados:** Uso de `class-validator` e `class-transformer` para garantir a integridade dos dados de entrada.
- **Tratamento de Erros:** Filtros de exceção globais para respostas padronizadas.

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (opcional, para rodar localmente sem Docker)

### Passos para execução via Docker

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`:
   ```bash
   cp .env.example .env
   ```
   *Preencha as variáveis de conexão com o banco de dados e o secret do JWT.*

3. **Inicie os containers:**
   ```bash
   docker-compose up -d
   ```
   *Este comando irá iniciar a aplicação e o banco de dados.*

4. **Execute as migrations e seeds (se aplicável):**
   ```bash
   docker-compose exec app npm run migration:run
   docker-compose exec app npm run seed:run
   ```

5. **Acesse a aplicação:**
   A API estará disponível em `http://localhost:3000`.

---

## 📚 Documentação da API

A documentação interativa da API foi construída utilizando o Swagger.
Após iniciar a aplicação, acesse:

👉 **[http://localhost:3000/api/docs](http://localhost:3000/api/docs)**

---

## 🧪 Testes

O projeto conta com uma suíte de testes para garantir a qualidade do código.

Para rodar os testes unitários:
```bash
npm run test
```

Para rodar os testes End-to-End (E2E):
```bash
npm run test:e2e
```

Para verificar a cobertura de testes:
```bash
npm run test:cov
```

---

## 💡 Diferenciais Implementados

-  Paginação e filtros na listagem de transações.
-  Boas práticas de segurança (Hash de senha, validação de DTOs).
-  Separação clara de responsabilidades (SOLID).
-  Seeds para popular o banco de dados e facilitar testes manuais.
-  Documentação completa com Swagger.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
*Desenvolvido com 💻 e ☕ por [Seu Nome](https://github.com/seu-usuario).*

