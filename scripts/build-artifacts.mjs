// Empacota cada conceito em um único HTML autocontido (CSS/JS/imagens embutidos)
// para publicação como Artifact (claude.ai) ou envio por e-mail.
// Uso: node scripts/build-artifacts.mjs [--max-width 1600]
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT = path.join(ROOT, 'dist', 'artifacts')
const IMG_TMP = path.join(ROOT, 'dist', 'artifact-img')
fs.mkdirSync(OUT, { recursive: true })
fs.mkdirSync(IMG_TMP, { recursive: true })

const args = process.argv.slice(2)
const maxWidth = Number(args[args.indexOf('--max-width') + 1]) || 1600

// 1) versões reduzidas dos JPG (Pillow) para caber no limite do artifact
execSync(`python3 - <<'PY'
from PIL import Image
import os, glob
src='${path.join(ROOT, 'assets', 'img')}'; out='${IMG_TMP}'
for f in glob.glob(src+'/*.jpg'):
    im=Image.open(f).convert('RGB')
    if im.width>${maxWidth}: im=im.resize((${maxWidth}, int(im.height*${maxWidth}/im.width)), Image.LANCZOS)
    im.save(os.path.join(out, os.path.basename(f)), quality=74, optimize=True, progressive=True)
PY`, { stdio: 'inherit' })

const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif' }

function dataUri(absPath) {
  const ext = path.extname(absPath).toLowerCase()
  let p = absPath
  if (ext === '.jpg' || ext === '.jpeg') {
    const small = path.join(IMG_TMP, path.basename(absPath))
    if (fs.existsSync(small)) p = small
  }
  if (!fs.existsSync(p)) return null
  const buf = fs.readFileSync(p)
  return `data:${MIME[ext] || 'application/octet-stream'};base64,${buf.toString('base64')}`
}

function inlineCssUrls(css, cssDir) {
  return css.replace(/url\((['"]?)([^'")]+)\1\)/g, (m, q, ref) => {
    if (/^(data:|https?:|#)/.test(ref)) return m
    const abs = path.resolve(cssDir, ref.split('?')[0].split('#')[0])
    const uri = dataUri(abs)
    return uri ? `url("${uri}")` : m
  })
}

function packConcept(dir) {
  const htmlPath = path.join(ROOT, 'concepts', dir, 'index.html')
  if (!fs.existsSync(htmlPath)) { console.log('pulando', dir, '(sem index.html)'); return }
  const conceptDir = path.dirname(htmlPath)
  let html = fs.readFileSync(htmlPath, 'utf8')

  // título
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [, 'Instituto Rocca'])[1].trim()
  // links externos permitidos (Google Fonts) e meta description
  const fontLinks = [...html.matchAll(/<link[^>]+(fonts\.googleapis|fonts\.gstatic)[^>]*>/gi)].map(m => m[0])
  const metaDesc = (html.match(/<meta[^>]+name=["']description["'][^>]*>/i) || [''])[0]

  // CSS locais em ordem
  const cssHrefs = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)]
    .map(m => m[0]).filter(t => !/googleapis|gstatic|https?:/.test(t))
    .map(t => (t.match(/href=["']([^"']+)["']/) || [])[1]).filter(Boolean)
  let css = ''
  for (const href of cssHrefs) {
    const abs = path.resolve(conceptDir, href)
    if (!fs.existsSync(abs)) { console.warn('CSS não encontrado:', href); continue }
    css += `\n/* ${href} */\n` + inlineCssUrls(fs.readFileSync(abs, 'utf8'), path.dirname(abs))
  }
  // <style> inline do próprio HTML
  const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => inlineCssUrls(m[1], conceptDir))
  css += '\n' + inlineStyles.join('\n')

  // JS locais (app.js)
  const jsSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["'][^>]*><\/script>/gi)].map(m => m[1]).filter(s => !/^https?:/.test(s))
  let js = ''
  for (const src of jsSrcs) {
    const abs = path.resolve(conceptDir, src)
    if (!fs.existsSync(abs)) { console.warn('JS não encontrado:', src); continue }
    js += `\n/* ${src} */\n` + fs.readFileSync(abs, 'utf8')
  }
  const inlineScripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1])

  // corpo
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  let body = bodyMatch ? bodyMatch[1] : html
  const bodyAttrs = (html.match(/<body([^>]*)>/i) || ['', ''])[1].trim()
  // remove scripts/links do corpo (já embutidos)
  body = body.replace(/<script[^>]*src=["'][^"']+["'][^>]*><\/script>/gi, '')
  body = body.replace(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi, '')
  body = body.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, '')

  // imagens → data URI (src, srcset, poster, data-src, <source src> de imagens)
  const attrRe = /(\s(?:src|poster|data-src|href)=["'])([^"']+)(["'])/gi
  body = body.replace(attrRe, (m, pre, ref, post) => {
    if (/^(data:|https?:|#|mailto:|tel:|wa\.me|\/\/)/.test(ref) || !/\.(jpe?g|png|svg|webp|gif)(\?|#|$)/i.test(ref)) return m
    const uri = dataUri(path.resolve(conceptDir, ref.split('?')[0].split('#')[0]))
    return uri ? `${pre}${uri}${post}` : m
  })
  body = body.replace(/(\ssrcset=["'])([^"']+)(["'])/gi, (m, pre, list, post) => {
    const conv = list.split(',').map(part => {
      const [ref, desc] = part.trim().split(/\s+/)
      if (!ref || /^(data:|https?:)/.test(ref)) return part.trim()
      const uri = dataUri(path.resolve(conceptDir, ref))
      return (uri || ref) + (desc ? ' ' + desc : '')
    })
    return `${pre}${conv.join(', ')}${post}`
  })
  // style="...url(...)" no corpo
  body = body.replace(/style=(["'])([^"']*url\([^"']*)\1/gi, (m, q, val) => `style=${q}${inlineCssUrls(val, conceptDir)}${q}`)
  // svg <use href="arquivo.svg#id"> não é convertido (raro)

  // classe html.js e atributos do body: replicar via script inicial
  const bootstrap = `document.documentElement.classList.add('js');${bodyAttrs ? `(function(){var b=document.body;${[...bodyAttrs.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(m => `b.setAttribute(${JSON.stringify(m[1])},${JSON.stringify(m[2])});`).join('')}})();` : ''}`

  const out = `<title>${title}</title>\n${metaDesc}\n${fontLinks.join('\n')}\n<style>\n${css}\n</style>\n${body}\n<script>${bootstrap}</script>\n<script>\n${js}\n${inlineScripts.join('\n')}\n</script>\n`
  const outPath = path.join(OUT, `${dir}.html`)
  fs.writeFileSync(outPath, out)
  console.log('gerado', path.relative(ROOT, outPath), (fs.statSync(outPath).size / 1024 / 1024).toFixed(2), 'MB')
}

for (const dir of ['00-kit', '01-materia', '02-chegada', '03-presenca']) packConcept(dir)
