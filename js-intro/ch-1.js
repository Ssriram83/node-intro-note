// Variables:Containers that you can store values in. 
var myVariable;

// In Java script no need to declare type.. Dynamically typed language
myVariable = 3;

// Duplicate declarations simply over-rides the earlier ones.. 
var myVariable = 45;

// Types of Data:

//String
myVariable = 'Hello';
console.log('String:::',myVariable);

// Number
myVariable = 1234;
console.log('Number:::',myVariable);

myVariable = 1234.2334555;
console.log('Number with floating:::',myVariable);

//Boolean
myVariable = true;
console.log('Boolean::: %n',myVariable);


//Array
myVariable = [1,2,3,45,6];
console.log('Array:::',myVariable);

myVariable = [1,2,3,45,6,'Bob'];
console.log('Array with Mixed Type:::',myVariable);

// Object: Well.. everything is an object in JS! Any data type, another object,  a function. 

myVariable = {a: 1234,b: 'Hello',c: ()=>{console.log('Inside an Object')},d:[1,2,3,4]};
console.log('Object:::',myVariable);

console.log("Extract Using dot notation:::",myVariable.a);

console.log("Extract Using predicate:::",myVariable['b']);


console.log("Execute a Function:::");
myVariable.c();

console.log("Get Nested Objects:::",myVariable.d[2]);

// Single Lined Comments

/*
	Multi Lined Comments.. 
*/