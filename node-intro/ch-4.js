// Promises..alternative to callback. It helps orchestrating multiple asynch callbacks...
// Bluebird promises are used extensively

var promise = require('bluebird');
// Since Blue bird is an external component -- use npm install bluebird

// Basic Example: promisify

var fs = promise.promisifyAll(require('fs'))
var fileReadPromise = fs.readFileAsync('in.file');
fileReadPromise.then((data)=>console.log(data.toString()), console.error)

// Example 2: Creating raw promise..This is used in model implementation.. 

function readFileAsync (file, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, encoding, function (err, data) {
      if (err) return reject(err) // rejects the promise with `err` as the reason
      resolve(data)               // fulfills the promise with `data` as the value
    })
  })
}

readFileAsync('in.file').then(console.log, console.error)

// Chaining Promises. Eg: get search string from in.file and call google search.. 
var request = require("request-promise");

// If your function does not give our promise by default, just wrap using bluebird promisify

fileReadPromise.then((searchString)=>{return request.get('https://google.com?q='+searchString)})
				.then(response =>{console.log(response.substring(1,50))})
				.catch(err=>console.log(err))

// Example 4: yield:: Generator that Making chaining even simpler..
// Generator is a special (*) type of function that suspends and executes at a later point.. 
// This is introduced in ES6 but can be used in ES5 by using bluebird.. 
promise.coroutine(function*(){
	// var fs = promise.promisifyAll(require('fs'))
	var output = yield fs.readFileAsync('in.file');
	console.log("Output after yield...",output.toString());
	var googleOutput = yield request.get('https://google.com?q='+output);
	console.log("Output after google yield",googleOutput.substring(1,50))
})();



