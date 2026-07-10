import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn, type ChildProcess } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import puppeteer from 'puppeteer'
import { PRERENDER_ROUTES } from '../src/routes'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PORT = 4173
const BASE = `http://127.0.0.1:${PORT}`

function startPreview(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort', '--host', '127.0.0.1'], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let started = false
    const onData = (chunk: Buffer) => {
      if (!started && chunk.toString().includes('Local:')) {
        started = true
        resolve(proc)
      }
    }

    proc.stdout?.on('data', onData)
    proc.stderr?.on('data', onData)
    proc.on('error', reject)
    proc.on('exit', (code) => {
      if (!started) reject(new Error(`Preview server exited with code ${code}`))
    })

    setTimeout(() => {
      if (!started) reject(new Error('Preview server failed to start within 30s'))
    }, 30_000)
  })
}

function outputPath(route: string): string {
  if (route === '/') return path.join(DIST, 'index.html')
  return path.join(DIST, route.slice(1), 'index.html')
}

async function main() {
  if (process.env.VERCEL) {
    console.log('Skipping prerender on Vercel (Puppeteer preview is not available in CI).')
    console.log('Run "npm run build:prerender" locally for static HTML generation.')
    return
  }

  const preview = await startPreview()
  const browser = await puppeteer.launch({ headless: true })

  try {
    const page = await browser.newPage()

    for (const route of PRERENDER_ROUTES) {
      const url = `${BASE}${route}`
      process.stdout.write(`Prerendering ${route}… `)

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60_000 })
      await page.waitForSelector('h1', { timeout: 10_000 })
      await page.waitForFunction(
        () => document.querySelector('meta[name="description"]')?.getAttribute('content'),
        { timeout: 10_000 },
      )

      const html = await page.content()
      const out = outputPath(route)
      await mkdir(path.dirname(out), { recursive: true })
      await writeFile(out, html, 'utf8')

      process.stdout.write('done\n')
    }
  } finally {
    await browser.close()
    preview.kill('SIGTERM')
  }

  console.log(`\nPrerendered ${PRERENDER_ROUTES.length} routes into dist/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
