# Server

The web application works using server side rendering, this is the server that makes the application work

It handle the the access of the application, the proxy for the API and the environment variable.

## Application

The application create an express server to serve the app

```js
import express from 'express'
import cookieParser from 'cookie-parser'
import { config } from './config.js'
import { router } from './router/index.js'

const app = express()

app.use(cookieParser())
app.use(router)

app.listen(config.port, () => console.log(`App listening on port ${config.port}`))
```

the file [./src/server/router/static.js](../src/server/router/static.js) contains the file to server the application

## Proxy

the proxy, here to handle the CORS for example, are stored in [./src/server/router/](../src/server/router/)

you need to create a js file, with the following content:
```js
import { createProxyMiddleware } from 'http-proxy-middleware'
import { Router } from 'express'
import { config } from '../config.js'

const router = Router()

router.use(
  '/api',
  createProxyMiddleware({
    target: config.apiUrl,
    secure: config.isProduction,
    changeOrigin: true,
    preserveHeaderKeyCase: true,
    onProxyReq: (proxyReq, req) =>
      req.headers.Authorization && proxyReq.setHeader('Authorization', req.headers.Authorization)
  })
)

export { router }
```

(you need to update with your needs)

and export it inside [index.js](../src/server/router/index.js)

```js
import { Router } from 'express'
import { router as apiRouter } from './api.js'
import { router as staticRouter } from './static.js'

const router = Router()

router.use(apiRouter)
router.use(staticRouter)

export { router }

```

## Environment variables

if you want to access/add/update the environment variables, you need to update that [file](../src/server/config.js)

```js
const config = {
  port: process.env.PORT || 3000,
  isProduction: process.env.NODE_ENV === 'production',
  apiUrl: process.env.API_URL || ''
}

export { config }

```
