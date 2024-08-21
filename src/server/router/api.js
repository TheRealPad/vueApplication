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
