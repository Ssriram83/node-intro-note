var util = require('util');
var EventEmitter = require('events').EventEmitter;

var url;
var dbConnection = function(url){
	var that = this;
	that.url = url;
	setTimeout(function() {
        that.emit('connected', that.url);
    }, 20);
}

dbConnection.prototype.release = function(){
	var that = this;
	setTimeout(function() {
        that.emit('released', that.url);
    }, 40);
}

util.inherits(dbConnection, EventEmitter);

module.exports = dbConnection;

