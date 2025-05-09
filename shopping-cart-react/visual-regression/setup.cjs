const fs = require('fs');
const path = require('path');
const os = require('os');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async () => {
  // Crear el directorio si no existe
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR, { recursive: true });
  }

  // Iniciar Puppeteer y guardar el wsEndpoint
  const browser = await puppeteer.launch();
  global.__BROWSER__ = browser;
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};