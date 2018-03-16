var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

console.log(binPath);
console.log(path.join(__dirname, process.argv[2]));

var childArgs = [
  process.argv[2],
  'some other argument (passed to phantomjs script)'
]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
	console.log(stdout);
})
