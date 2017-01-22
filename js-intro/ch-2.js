// Operators

// Add 
console.log(6+9);
console.log('6'+9);
console.log('a'+'b');
console.log({a:'a'}+{b:'b'});

// Subtract, Multiply and Divide.. Well its Basic Math.. 
console.log(9 - 3);
console.log(8 * 2); 
console.log(9 / 3);

// Assignment = sign
// Variables referrence always create a new pointer.. 
var myVariable = 1;
var copyofMyVariable = myVariable;

console.log(copyofMyVariable);
var myVariable = 2;
console.log(copyofMyVariable);// Its still 2
 
var myVariable = {name: 'Bob'};
var copyofMyVariable = myVariable;

console.log(copyofMyVariable);
var myVariable = {name: 'John'};
console.log(copyofMyVariable); // Its Still Bob

// Identity ===
console.log('1'==1)
console.log('1'===1)
console.log('1'==true);
console.log('1'===true); // Cmpares values  + object type. 
console.log('0'==false);
console.log(0==false);
console.log(''==false);
console.log(null=='');

//if(null), (undefined), '' all evaluates to false
var newVariable = (null) ? '1':'2';
console.log(newVariable);


// String Operators

var myVariable = 'String';
console.log(myVariable.length);
console.log(myVariable[0]+':::'+myVariable[myVariable.length-1]);
console.log(myVariable.indexOf('j'));
console.log(myVariable.slice(2));

// Detailed Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var n = [1,2,3,4,5]
var twoTimesn = n.map((item)=>{return 2*item})
console.log(twoTimesn);
n.forEach((item=>{console.log(item)}));

// Reduce
var sumOfn = n.reduce((a,b)=>(a+b),0);
console.log("Sum of N:::",sumOfn)

var list1 = [[0, 1], [2, 3], [4, 5]];
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
console.log(flatten(list1)); // returns [0, 1, 2, 3, 4, 5]