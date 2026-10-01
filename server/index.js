import { createServer } from 'node:http';
import { readFile, access } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const port = Number(process.env.PORT || 3000);
const coingecko = process.env.COINGECKO_BASE_URL || 'https://api.coingecko.com/api/v3';
const mempool = process.env.MEMPOOL_BASE_URL || 'https://mempool.space/api';
const portfolioFile = process.env.PORTFOLIO_FILE || join(root, 'data/portfolio.json');

const headers = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
const send = (res, status, body) => { res.writeHead(status, headers); res.end(JSON.stringify(body)); };

async function getPortfolio() {
  try {
    await access(portfolioFile);
    return JSON.parse(await readFile(portfolioFile, 'utf8'));
  } catch {
    return JSON.parse(await readFile(join(root, 'data/portfolio.example.json'), 'utf8'));
  }
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: 'application/json', 'user-agent': 'boch-nexo-mx/1.0' } });
  if (!response.ok) throw new Error(`Proveedor respondió ${response.status}`);
  return response.json();
}

async function api(path, query, res) {
  if (path === '/api/health') return send(res, 200, { ok: true, service: 'boch-nexo-mx', time: new Date().toISOString() });
  if (path === '/api/market') {
    const ids = (query.get('ids') || 'bitcoin,ethereum,solana').split(',').map((id) => id.trim()).filter(Boolean).slice(0, 20);
    if (!ids.length) return send(res, 400, { error: 'Debes indicar al menos un id.' });
    try {
      const data = await fetchJson(`${coingecko}/simple/price?ids=${encodeURIComponent(ids.join(','))}&vs_currencies=usd,mxn&include_24hr_change=true`);
      return send(res, 200, { source: 'CoinGecko', data, fetchedAt: new Date().toISOString() });
    } catch (error) { return send(res, 502, { error: 'No se pudo consultar CoinGecko.', detail: error.message }); }
  }
  if (path === '/api/mempool') {
    try { return send(res, 200, { source: 'mempool.space', data: await fetchJson(`${mempool}/v1/fees/recommended`) }); }
    catch (error) { return send(res, 502, { error: 'No se pudo consultar Mempool.', detail: error.message }); }
  }
  if (path === '/api/portfolio') return send(res, 200, await getPortfolio());
  return send(res, 404, { error: 'Ruta no encontrada.' });
}

const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return await api(url.pathname, url.searchParams, res);
    const requested = url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\/+/, '');
    const file = normalize(join(root, requested));
    if (!file.startsWith(root)) return send(res, 403, { error: 'Acceso denegado.' });
    const content = await readFile(file);
    res.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
    res.end(content);
  } catch { send(res, 404, { error: 'Recurso no encontrado.' }); }
});

server.listen(port, () => console.log(`BOCH-NEXO-MX disponible en http://localhost:${port}`));
