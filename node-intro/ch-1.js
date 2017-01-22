// Callback is an asynchronous equivalent for a function.

// Blocking way of coding
console.log('Program Started...');
var fs = require("fs");
var data = fs.readFileSync('in.file');
console.log('Read Data Synchronoulsy:'+data.toString());

// Non Blocking way of coding
console.log('Reading Data asynchronous');
fs.readFile('in.file', function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log('Read Data Asynch...'+data.toString());	
	}	
});
console.log('Program Ended...'); // THis will be executed before Asynch callback... 