import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const inputDir = path.join(projectRoot, 'public', 'images')

const targets = [
  { name: 'shutterstock_1843014460.jpg' },
  { name: 'shutterstock_1405449578.jpg' },
  { name: 'shutterstock_2528263849.jpg' },
  { name: 'shutterstock_2668969459.jpg' },
  { name: 'shutterstock_2269656513.jpg' },
  { name: 'shutterstock_1717081216.jpg' },
]

const variants = [
  { suffix: '1200', width: 1200, quality: 70 },
  { suffix: '2000', width: 2000, quality: 72 },
]

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function main() {
  await Promise.all(
    targets.map(async (t) => {
      const jpgPath = path.join(inputDir, t.name)
      const base = t.name.replace(/\.jpg$/i, '')
      const webp2000Path = path.join(inputDir, `${base}-2000.webp`)

      const inPath = (await exists(jpgPath)) ? jpgPath : webp2000Path

      const input = sharp(inPath, { failOn: 'none' })
      const meta = await input.metadata()

      await Promise.all(
        variants.map(async (v) => {
          const outPath = path.join(inputDir, `${base}-${v.suffix}.webp`)
          const width = meta.width && meta.width > v.width ? v.width : meta.width

          let pipeline = sharp(inPath, { failOn: 'none' }).rotate()
          if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true })

          await pipeline.webp({ quality: v.quality }).toFile(outPath)
          const [inStat, outStat] = await Promise.all([fs.stat(inPath), fs.stat(outPath)])
          const saved = inStat.size - outStat.size
          const pct = ((saved / inStat.size) * 100).toFixed(1)
          process.stdout.write(`${t.name} -> ${path.basename(outPath)} | saved ${pct}%\n`)
        }),
      )
    }),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

