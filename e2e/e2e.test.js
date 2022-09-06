import puppeteer from 'puppeteer';
// import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  // const server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    // server = fork(`${__dirname}/e2e.server.js`);
    // await new Promise((resolve, reject) => {
    //   server.on('error', reject);
    //   server.on('message', (message) => {
    //     if (message === 'ok') {
    //       resolve();
    //     }
    //   });
    // });

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    // server.kill();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);

    jest.setTimeout(20000);
    await page.goto('http://localhost:8888');

    // await page.waitFor('.form-inline');

    const form = await page.$('.form-inline');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn');

    await input.type('371449635398431');
    await submit.click();

    // await page.waitFor('.form-inline .valid');
  });
});
