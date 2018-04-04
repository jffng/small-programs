const puppeteer = require('puppeteer');
const config = require('../config').puppeteer;
const fs = require('fs');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.setUserAgent(config['ua_chrome'])
  await page.setCookie({
    name: config['cookie_name'],
    value: config['cookie_value'],
    domain: config['cookie_domain']
  });

  await page.goto(config['url']);

  // for some reason, it's necessary to expand the page for the element selectors to work
  const watchDog = page.waitForFunction('window.innerWidth > 1000');
  await page.setViewport({width: 2560, height: 1148});
  await watchDog;

  // take a screenshot if you want
  // await page.screenshot({ path: '03_04/screenshot.png' });

  // wait for DOM element to load
  await page.waitForSelector(config['wait_selector']);

  // run some JS
  const data = await page.$$eval(config['el_selector'], els => {
    let companies = [];

    // iterate over the DOM nodes and parse what we need
    els.forEach(el => {
      companies.push(el.innerText.split(/\nCompany Name|\nDates Employed|Employment Duration|\nLocation|\n/))
    });

    return companies
  });

  const jobs = data.map(d => ({
      'title': d[1],
      'companyName': d[2],
      'employmentDates': d[3],
      'employmentDuration': d[4],
      'city': d[5]
  }))

  console.log(jobs);

  const json = {
    'name': 'test',
    'jobs': jobs
  }

  fs.writeFile('03_04/results.json', JSON.stringify(json), 'utf8', () => {
    console.log('done');
  });

  await browser.close();
})
