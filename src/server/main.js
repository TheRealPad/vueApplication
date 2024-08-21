import express from 'express'
import cookieParser from 'cookie-parser'
import { config } from './config.js'
import { router } from './router/index.js'

const app = express()

app.use(cookieParser())
app.use(router)

app.listen(config.port, () => console.log(`App listening on port ${config.port}`))
