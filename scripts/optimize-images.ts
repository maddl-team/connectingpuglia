import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images')
const MAX_WIDTH = 1920

function walkPngs(dir: string): string[] {
  const files: string[] = []
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (fs.statSync(full).isDirectory()) {
      files.push(...walkPngs(full))
    } else if (entry.endsWith('.png')) {
      files.push(full)
    }
  }
  return files
}

function formatKb(bytes: number): string {
  return `${Math.round(bytes / 1024)} KB`
}

async function optimizeImage(filePath: string) {
  const before = fs.statSync(filePath).size
  const meta = await sharp(filePath).metadata()
  let pipeline = sharp(filePath)

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  const optimizedPng = await pipeline
    .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 })
    .toBuffer()

  fs.writeFileSync(filePath, optimizedPng)

  const webpPath = filePath.replace(/\.png$/, '.webp')
  const webp = await sharp(optimizedPng)
    .webp({ quality: 82, effort: 6 })
    .toBuffer()

  fs.writeFileSync(webpPath, webp)

  const afterPng = fs.statSync(filePath).size
  const afterWebp = fs.statSync(webpPath).size

  return {
    file: path.relative(IMAGES_DIR, filePath),
    before,
    afterPng,
    afterWebp,
    dimensions: `${meta.width}×${meta.height}`,
  }
}

async function main() {
  const files = walkPngs(IMAGES_DIR)
  let totalBefore = 0
  let totalPng = 0
  let totalWebp = 0

  for (const file of files) {
    const result = await optimizeImage(file)
    totalBefore += result.before
    totalPng += result.afterPng
    totalWebp += result.afterWebp
    console.log(
      `${result.file}: ${formatKb(result.before)} → PNG ${formatKb(result.afterPng)} / WebP ${formatKb(result.afterWebp)} (${result.dimensions})`,
    )
  }

  console.log('\n---')
  console.log(`Files: ${files.length}`)
  console.log(`Before: ${formatKb(totalBefore)}`)
  console.log(`PNG after: ${formatKb(totalPng)}`)
  console.log(`WebP total: ${formatKb(totalWebp)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
