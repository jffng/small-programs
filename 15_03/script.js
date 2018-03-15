var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

console.log(binPath);

var childArgs = [
  path.join(__dirname, 'phantom.js'),
  'some other argument (passed to phantomjs script)'
]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
	console.log(stdout);
})
