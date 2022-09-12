//Q.1: What is a Temporal Dead Zone?

// Before going to start, just think about what these 3 words are saying? Temporal means something temporary, not permanent, and Dead means something which is not working or can say it is in a lifeless state, Zone denotes an area but here we are in programming so this term area will be something related to memory, or also zone can be thought of as the time period or phase

// The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable

//Q.2: What is the for-in loop in JavaScript? Give its syntax

//The for...in loop is used to loop through an object's properties.
//Syntax
// The syntax of ‘for..in’ loop is −
// for (variablename in object) {
//    statement or block to execute
// }
// In each iteration, one property from object is assigned to variablename and this loop continues till all the properties of the object are exhausted.

//use to access index number

//Q.3: Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//Scope in JavaScript actually determines the accessibility of variables and functions at various parts in one’s own code or program.
//There are three types of scopes available in JavaScript: Global Scope, Local / Function Scope, and Block Scope. Let us try to understand each one of them briefly in the following section.
//Global Scope:Variables or functions (or methods) which are declared under a global namespace (like area or location) are determined as Global Scope. It means that all the variables which have global scope can be easily accessed from anywhere within the code or a program.

//Local or Function Scope:Variables that are declared inside a function or a method have Local or Function Scope. It means those variables or functions which are declared inside the function or a method can be accessed within that function only.

//Block Scope:Block Scope is related to the variables or functions which are declared using let and const since var does not have block scope.Block Scope tells us that variables that are declared inside a block { }, can be accessed within that block only, not outside of that block.
{
    let x = 13;
}
// Throws a reference error 
// since x is declared inside a block which 
// cannot be used outside the block
console.log(x);

//Scope Chain:

// JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.

  // Global variable
  var global_variable = 20;
  
  function main_function() {
      // Local Variable
      var local_variable = 30;

      var nested_function = function () {

          // Display the value inside the local variable
          console.log(local_variable);
      }

      var another_nested_function = function () {
            
          // Displays the value inside the global variable
          console.log(global_variable);
      }

      nested_function();
      another_nested_function();
  }

  main_function();

  //Q.4:What is difference between null and undefined and where to use what?
// In JavaScript, undefined is a type, whereas null an object.
// undefined:
// It means a variable declared, but no value has been assigned a value.
// For example,
// var demo;
// alert(demo); //shows undefined
// alert(typeof demo); //shows undefined
// null:
// Whereas, null in JavaScript is an assignment value. You can assign it to a variable.
// For example,
// var demo = null;
// alert(demo); //shows null
// alert(typeof demo); //shows object

//Q.5: what is Symbol?
// The JavaScript Symbol is a function that is used to identify the object properties.
// it is also new primitive data type introduced in EA6
// Points to remember
// A Symbol() method always return a unique value.
// A symbol value may be used as an identifier for object properties.
// Symbols are immutable, just like numbers or strings.
// Symbols cannot be typecasted to primitive data types.

//Q.6: Write code to explain map and filter in arrays

// Map
// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
const number = [1, 2, 3, 4];
const doubled = number.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//Filter :The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//Q.7: Explain passed by value and passed by reference

//Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument. So any changes made inside the function does not affect the original value.

//it is primitive data type

// In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .
function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);

    //    Output:

    //    Before calling Pass by value Function -> a = 1 b = 2
    //    Inside Pass by value function -> a = 2 b = 1
    //    After calling Pass by value Function -> a =1 b = 2

//  Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
// it is non-primitive Data type.
// In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. 

function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = {
    a: 10,
    b: 20
  
}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
  
PassbyReference(obj)
  
console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

// Output:

// Before calling Pass By Reference Function -> a = 10 b = 20
// Inside Pass By Reference Function -> a = 20 b = 10
// After calling Pass By Reference Function -> a = 20 b = 10

//Q.8: Please explain Self Invoking Function and its code
//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.
//An anonymous function(Anonymous Function is a function that does not have any name associated with it.) is enclosed inside a set of parentheses followed by another set of parentheses (), which does the execution

//Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

// You cannot self-invoke a function declaration.
//Example
(function () {
    let x = "Hello!!";  // I will invoke myself
  })();

  //Q.9: What is an event loop and call stack

//   The event loop has one simple job : to monitor the call stack and callback queue. If the call stack is empty, the event loop will take the first item from the callback queue and will push it to call stack, which will effectively runs it

//The call stack
// The call stack is a LIFO queue (Last In, First Out).

// The event loop continuously checks the call stack to see if there’s any function that needs to run.

// While doing so, it adds any function call it finds to the call stack and executes each one in order.

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()

//This code prints

// foo
// bar
// baz
// as expected.

// When this code runs, first foo() is called. Inside foo() we first call bar(), then we call baz().
