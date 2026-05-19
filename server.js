import 'dotenv/config';
import express from 'express';
import { join, resolve } from 'node:path';

const rootDir = resolve(process.cwd());
const publicDir = join(rootDir, 'public');

const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error('PORT debe ser un numero entre 1 y 65535');
}

const app = express();

app.use(express.static(publicDir));

app.get('*', (_request, response) => {
  response.sendFile(join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Vuelder site disponible en http://localhost:${port}`);
});
