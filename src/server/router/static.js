import fs from 'node:fs/promises'
import { Router } from 'express'
import { config } from '../config.js'

const templateHtml = config.isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = config.isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

const router = Router()

let vite
if (!config.isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/'
  })
  router.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  router.use(compression())
  router.use('/', sirv('./dist/client', { extensions: [] }))
}

router.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    let template
    let render
    if (!config.isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
    } else {
      template = templateHtml
      render = (await import('../../../dist/server/entry-server.js')).render
    }
    const rendered = await render(url, ssrManifest)
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

export { router }
