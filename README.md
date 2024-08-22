![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

[![CI - Build and Test](https://github.com/TheRealPad/vueApplication/actions/workflows/ci.yml/badge.svg)](https://github.com/TheRealPad/vueApplication/actions/workflows/ci.yml)

# vue-project

Vue + Vite application using Server Side Rendering (SSR)

## Start the project

### Env
You need to create a .env file to set the environment variables with the following content:
```dotenv
PORT=3000
API_URL=https://example.com
```

### development mode
```bash
yarn dev
```

### production mod
```bash
yarn build:server
yarn build:client
yarn start
```

### docker
Files are contains in ```./config/docker```

The environment variables are directly set inside the docker-compose.{prod | dev}.yml file
```bash
make # start the container for Unix systems
make stop # stop the container for Unix systems

docker-compose -f ./config/docker/docker-compose.dev.yml up --build # start dev
docker-compose -f ./config/docker/docker-compose.prod.yml up --build # start prod
```

## Test the project

### Unit test
```bash
yarn test:unit
```

### En-to-End test
```bash
yarn test:e2e
```

## Features

If you go to ```./src/client/components/themeSwitch``` you can find the toggle swtch from this [tiktok](https://www.tiktok.com/@codewisdom/video/7267317206025800992)
