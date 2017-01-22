// Conditionals:

//if .. else

var resultsFromDB = [{count:1}];

if(resultsFromDB[0].count > 0){ // This is prone to errors as resultsFromDB might be undefined
	console.log('Got Response from DB');
}else{
	console.log('No Response from DB');
}

if(resultsFromDB && resultsFromDB[0] && resultsFromDB[0].count > 0){ // This is better... 
	console.log('Got Response from DB');
}else{
	console.log('No Response from DB');
}

// For Loop
console.log("For Loop using Let");
var resultsFromDB = [1,2,3,4,5];
for(let result of resultsFromDB){
	console.log(result);
}

console.log("For Loop using standard way");
for(var i = 0; i<resultsFromDB.length; i++){
	console.log(resultsFromDB[i]);
}

// Functions: 
function add(a,b){
	return a+b;
}
console.log("Results from Function::",add(1,2));

// Functions can be asigned to a variable.. 
// Arrow Notation makes function declaration expressive.. 
var multiply = (a,b)=> a*b;

console.log("Results from Function::",multiply(2,2));
console.log("Results from Function::",multiply(add(2,2),2));

// Function can take another function as input

function consoleStream(message) {
    console.log(message);
}
function printStuffWith(outStream) {
    outStream("Hello World!");
}

//alerts "Hello World!"
printStuffWith(consoleStream);

// Typically this will be used with Callbacks.. which we will see soon.. 

// Function can be inside another function.. This is called Currying.. 
// Also it helps to write more expressive functionalities..

var generateGreetings = (message)=>(seperator)=>(emphasis)=>(name)=>(message + seperator + name + emphasis );
var greetAwkwardly = generateGreetings('Hello')('...')('?');
console.log(greetAwkwardly('Sriram'));

var greetSuperCheerful = generateGreetings('Hi')(' there ')('!!!');
console.log(greetSuperCheerful('Sriram'));