const puppeteer = require('puppeteer');
const config = require('../config').puppeteer;
const delayPromise = require('../utils/delay-promise');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36')
  await page.setCookie({
    name: config['cookie_name'],
    value: config['cookie_value'],
    domain: config['cookie_domain'] 
  });

  await page.goto(config['url']);
  await delayPromise(2000 + Math.random * 3000);
  await page.screenshot({ path: 'screenshot.png' });
  const results = await page.$('#experience-section');
  console.log(results)

  await page.close();
  await browser.close();
})();
