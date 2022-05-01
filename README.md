<div align="center">
  <h1>PPROJETO DE TCC COTRIPAM</h1>
  <p>Versão 0.1.0</p>
</div>
<h1>-Tecnologias Usadas Nesse Projeto</h1><br>
<img align="center" alt="Wes-sonarStatus" height=auto width=auto src="https://sonarcloud.io/api/project_badges/quality_gate?project=Wesllen-Vinicius_CotripamTS">
<div style="display:inline_block">
<img align="center" alt="Wes-archLinux" height=auto width=auto src="https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white"> -
<img align="center" alt="Wes-html" height=auto width=auto src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"> -
<img align="center" alt="Wes-node" height=auto width=auto src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> -
<img align="center" alt="Wes-express" height=auto width=auto src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> -
<img align="center" alt="Wes-react" height=auto width=auto src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> -
<img align="center" alt="Wes-styledComponents" height=auto width=auto src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> -
<img align="center" alt="Wes-postgres" height=auto width=auto src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"> 
-
<img align="center" alt="Wes-heroku" height=auto width=auto src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> -
<img align="center" alt="Wes-vscode" height=auto width=auto src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"> -
<img align="center" alt="Wes-prettier" height=auto width=auto src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> -
<img align="center" alt="Wes-prismaOrm" height=auto width=auto src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"> -
<img align="center" alt="Wes-Snyk" height=auto width=auto src="https://img.shields.io/badge/Snyk-4C4A73?style=for-the-badge&logo=snyk&logoColor=white"> -
<img align="center" alt="Wes-git" height=auto width=auto src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> -
<img align="center" alt="Wes-Docker" height="50" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"> -
<img align="center" alt="Wes-insominia" height=auto width=auto src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"> -
<img align="center" alt="Wes-yarn" height=auto width=auto src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white"> -
<img align="center" alt="Wes-vercel" height=auto width=auto src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"> -
<img align="center" alt="Wes-typescript" height=auto width=auto src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> -
<img align="center" alt="Wes-cypress" height=auto" width=auto src="https://img.shields.io/badge/-jest-%23E5E5E5?style=for-the-badge&logo=jest&logoColor=058a5e">
</div>
<h1>INFRAESTRUTURA DE FRONT-END COM REACT + TYPESCRIPT</h1>
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
