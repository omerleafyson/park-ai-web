import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const directory = dirname(fileURLToPath(import.meta.url));
const output = join(directory, 'dist');
await mkdir(output, {recursive:true});
for(const f of ['index.html','logo.webp']) await copyFile(join(directory,f),join(output,f));
console.log('PARK AI static coming-soon site built');
