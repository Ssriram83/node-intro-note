// Streams... 
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion
// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. 

// Mostly all apis follow the below events: data,end,error,finish
// We use this in reading clob data from oracle. 

var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('in.file');
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log("Data from file:",data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Read Ended");

// Piping Streams
var readerStream = fs.createReadStream('in.file');
var writeStream = fs.createWriteStream('out.file');
readerStream.pipe(writeStream)

writeStream.on('finish',()=>console.log('Write Ended'))



