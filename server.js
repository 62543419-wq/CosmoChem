import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));
app.listen(PORT, () => console.log(`CosmoChem activo en http://localhost:${PORT}`));
