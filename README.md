<div align="center">
  <h1>PPROJETO DE TCC COTRIPAM</h1>
  <p>Versão 0.1.0</p>
</div>
<h1>- TECNOLOGIAS</h1>
<p>SONAR</p>
<p>VSCODE</p>
<p>BEEKEEPER STUDIO</p>
<p>DOCKER</p>
<p>POSTGRES</p>
<p>INSOMNIA</p>
<h1>INFRAESTRUTURA DE FRONT-END COM REACT + TYPESCRIPT</h1>
- [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Wesllen-Vinicius_CotripamTS&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Wesllen-Vinicius_CotripamTS)
- [![visual_studio_code](./src/visual_studio_code.svg)](https://badges.aleen42.com/src/visual_studio_code.svg)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<h1>INFRAESTRUTURA DE BACK-END COM DOCKER + PRISMA + POSTGRES + NODEJS</h1>
## Features

This repository is 🔋 battery packed with:

- ⚡️ Docker
- ⚛️ Prisma
- ✨ TypeScript

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
