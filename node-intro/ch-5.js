var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'))

// Example 3: Map

var promises = [];

var fileNames = ['ch-1.js','ch-2.js','ch-3.js']
// Using Promise.map:
Promise.map(fileNames,function(fileName) {
    // Promise.map awaits for returned promises as well.
    return fs.readFileAsync(fileName);
},{concurrency: 1}).each(file=>{console.log(file.toString().substring(1,50)+'......')}).then(function() {
    console.log("done");
    console.log("**********************************");
});


// Use mapSeries for Sequential.. 
Promise.mapSeries(fileNames,function(fileName) {
    // Promise.map awaits for returned promises as well.
    return fs.readFileAsync(fileName);
},{concurrency: 1}).each(file=>{console.log(file.toString().substring(1,50)+'......')}).then(function() {
    console.log("done");
console.log("**********************************");
});