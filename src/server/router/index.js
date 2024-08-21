import { Router } from 'express'
import { router as apiRouter } from './api.js'
import { router as staticRouter } from './static.js'

const router = Router()

router.use(apiRouter)
router.use(staticRouter)

export { router }
