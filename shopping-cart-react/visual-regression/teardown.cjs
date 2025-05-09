const fs = require('fs');
const path = require('path');
const os = require('os');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async () => {
  // Leer el wsEndpoint y cerrar el navegador
  const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
  const browser = await puppeteer.connect({ browserWSEndpoint: wsEndpoint });
  await browser.close();

  // Eliminar el archivo y el directorio
  fs.rmSync(DIR, { recursive: true, force: true });
};