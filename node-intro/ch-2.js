// Event Emitter Pattern... 


var db = require('./lib/db-driver');

var client = new db('localhost://mongodb');


client.on('connected',(data)=>{
	console.log("Connected to..",data);
});

client.release();

client.on('released',(data)=>{
	console.log('Released Connection from..',data);
})