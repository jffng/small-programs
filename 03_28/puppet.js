const puppeteer = require('puppeteer');
const config = require('../config').puppeteer;

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36')
  await page.setCookie({
    name: config['cookie_name'],
    value: config['cookie_value'],
    domain: config['cookie_domain'] 
  });

  await page.goto(config['url']);
  // not sure how to get around CSP, therefore wait random amount of time
  await page.waitFor(3000 + Math.random() * 3000);
  const results = await page.$('#experience-section');
  console.log(results);

  await browser.close();
})
