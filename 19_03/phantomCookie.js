var page = require('webpage').create();
var bscookie = require('../config').bscookie;
var endpoint = require('../config').endpoint;

page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0';

// TO-DO: successfully add a cookie and make a request
var success = phantom.addCookie(bscookie);

if (success){
  console.log('Opening phantom');
  page.open(endpoint, function (status) {
      if (status !== 'success') {
          console.log('Unable to access network');
      } else {
          var ua = page.evaluate(function () {
              return document.getElementsByClassName('pv-entity__secondary-title')[0].innerText;
          });

          console.log(ua);
      }
      phantom.exit();
  });
}else {
  console.log('Failed to add cookie');
  phantom.exit();
}
