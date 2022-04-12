<div align="center">
  <h1>INFRAESTRUTURA DE BACK-END COM DOCKER + PRISMA + POSTGRES</h1>
  <p>PRISMA + DOCKER + TypeScript.</p>
  <p>Versão 0.1.0</p>
</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Docker
- ⚛️ Prisma
- ✨ TypeScript
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix

## Getting Started



### . Install dependencies

Use o npm para instakar todas as dependencies.
ATENÇÃO: Execute o comando npm dentro de ambas as pastas, prisma e docker.

```bash
npm install
```

### 2. Execute o docker compose depois de passsar os parametros de acordo com sua estrutura de banco.

ATENÇÃO: O comando deve ser executado somente na pasta do docker, para que ele encontre o compose e consiga dar o UP

```bash
docker-compose up
```
Depois de executar o comando, com a erversão do postgres que voce escolheu baixar, abra o docker e comfirme se está tudo ok.

### 3. Executando o Prisma.
ATENÇÃO: execute o comando apos ter criado suas models para que seja possivel o prisma criar suas tabelas no database.

```bash
npx prisma migrate dev --name init
```

### 4. Use sua IDE de conexão de sua escolha para verficiar se as tables foram criadas.

DICAS: 
Beekeper IDE
Data-Grip IDE
Etc...