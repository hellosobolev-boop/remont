import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { basename, dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./out/', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.avif':'image/avif','.png':'image/png','.ico':'image/x-icon','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8' };

createServer(async (req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\//, '');
  const rscRel = rel.replace(/\.__PAGE__\.txt$/, '/__PAGE__.txt');
  const rscParts = basename(rel).split('.');
  const nestedRscRel = rscParts[0] === '__next' && rscParts.length > 4
    ? join(dirname(rel), `${rscParts[0]}.${rscParts[1]}`, ...rscParts.slice(2, -2), '__PAGE__.txt')
    : rscRel;
  const candidates = [rel, rscRel, nestedRscRel, join(rel, 'index.html')];
  let file;
  for (const candidate of candidates) {
    const resolved = normalize(join(root, candidate));
    if (!resolved.startsWith(normalize(root))) continue;
    try { if ((await stat(resolved)).isFile()) { file = resolved; break; } } catch {}
  }
  let status = 200;
  if (!file) { file = join(root, '404.html'); status = 404; }
  try {
    const body = await readFile(file);
    res.writeHead(status, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable' });
    res.end(body);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Local preview is not built. Run npm run build first.');
  }
}).listen(port, '127.0.0.1', () => console.log(`Local preview: http://localhost:${port}`));
