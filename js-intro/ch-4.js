// Weird Stuff

// Immediately Invoke a function
var main = ()=>console.log('Initializing the main function')
main();

// paranthesis position matters
function a() {
   return
   {
      a: 'a'
   }
}

function b() {
   return {
      b: 'b'
   }
}

console.log(a()); // Coding Style is super important in JS!
console.log(b());

// Equality: undefined, null, '' all evaluates to false
// This is useful while assigning variables
var name; // If name is not initialized it is by default undefined. 
var greetings = (name) ? 'Hello::'+result:'Hello Unknown Stranger!';
console.log('Greetings::',greetings)


// 99% .. well 100% of scenarios its better to  use === or !== 
console.log(':::::::::Equality:::::')
var a = {message:1},
	b = {message:'1'}
console.log(a.message==b.message);
console.log(a.message===b.message);	
// Single Quotes and Duble quotes are same
var name = "Sriram";
var greetings = 'Hello';

console.log(name,greetings)

// Arguments.. Special type of array
function sum() {
  var sum = 0;
  for(var i of arguments) {
    sum += i;
  }
  return sum;
}

console.log("Function using Arguments::::"+sum(1,2,3,4))

// Closure:A closure is a function having access to the parent scope, even after the parent function has closed.
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var mjName = celebrityName ("Michael");

console.log(mjName('Jackson'));