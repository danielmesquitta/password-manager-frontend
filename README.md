# Password Manager (Frontend)

## Technologies and Libraries

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## Live application (Deployed in Vercel)

- [Link to access client](https://passmanager.danielmesquitta.com)

## Running locally

### Requirements

- [Node](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)
- [git](https://git-scm.com/)

### Start Client

```shell
# Clone the project
$ git clone https://github.com/danielmesquitta/password-manager-frontend

# Access the folder
cd password-manager-frontend

# Install dependencies
$ yarn

# Create .env file
$ cp .env.example .env

# Start
$ yarn dev
```

## Running in production

### Requirements

- [Node](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)
- [git](https://git-scm.com/)

### Start Client

```shell
# Clone the project
$ git clone https://github.com/danielmesquitta/password-manager-frontend

# Access the folder
cd password-manager-frontend

# Install dependencies
$ yarn

# Create .env file
$ cp .env.example .env

# Build
$ yarn build

# Remove development dependencies
$ yarn install --production

# Start
$ yarn start
```
