const { readFileSync } = require('fs');
const { tmpdir } = require('os');
const { join } = require('path');
const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node').default;

const DIR = join(tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    const wsEndpoint = readFileSync(join(DIR, 'wsEndpoint'), 'utf8');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }
    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
  }

  async teardown() {
    await super.teardown();
    if (this.global.__BROWSER__) {
      await this.global.__BROWSER__.disconnect();
    }
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;