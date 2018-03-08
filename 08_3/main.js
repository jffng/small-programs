// A small program that takes a word in English, translates it to another language, and then back again.
const request = require('request');
const readline = require('readline');
const CONFIG = require('../config.js');
const CODES = require('./languageCodes.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a word to receive a roundabout translation for: ', (response) => {
  getTranslation(response);
  rl.close();
})

function getTranslation(word){
  const key = Math.floor(Math.random() * Object.keys(CODES.langs).length)
  const languageCode = Object.keys(CODES.langs)[key]
  console.log(CODES.langs[languageCode])
  translate(word, languageCode)

}

function translate(word, lang){
  request('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + CONFIG.yandex + '&lang=' + lang + '&text=' + word, { json: true }, (err, res, body) => {
    if (err) { return console.log(err) }
    const fromTo = lang+'-en'
    const url = encodeURI('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + CONFIG.yandex + '&lang=' + fromTo + '&text=' + body.text[0])
    request(url, { json: true }, (err, res, body) => {
      if (err) { return console.log(err) }
      console.log(body.text[0])
      return body.text[0]
    });
  });
}
