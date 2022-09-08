//Q.1: Difference between “ == “ and “ === “ operators.

// = is used for assigning values to a variable in JavaScript. == is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
var number = 100;  // Here number variable assigned using =
if (number == 100)  // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
   console.log("Both are equal");    
else    
   console.log("Both are not equal");  

if (number === 100)  // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
   console.log("Both are equal");      
else      
   console.log("Both are not equal"); 

//...........................................


//Q.2: What is the spread operator?
// Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  //.........................................

  //Q.3:What are the differences between var, let and const?

  //  var can be redefiened and redeclared and we can access the var anytime (even befor defining it value) due to hoisting. it is global scope object that means we can access this anytime.

//   Variables defined with let are also hoisted to the top of the block, but not initialized.Variables defined with let cannot be Redeclared.Variables defined with let must be Declared before use.Variables defined with let have Block Scope.

//Declaring a variable with const is similar to let when it comes to Block Scope.Variables defined with const are also hoisted to the top, but not initialized.Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope

//...............................................

//Q.4: What is execution context

// The environment that helps the code get executed is called the Execution Context. It is the code that's currently running, and everything surrounding that helps to run it.

// There are two types of execution contexts:

// a) Global Execution Context (GEC) : Whenever we execute JavaScript code, it creates a Global Execution Context (also knows as Base Execution Context). The global execution context has two phases. 1) Creation Phase : If there are any variables declared in the code, the memory gets allocated for the variable. The variable gets initialized with a unique value called undefined.  If there is a function in the code, it gets placed directly into the memory. We will learn more about this part in the Hoisting section later. 2) Execution Phase: The code execution starts in this phase. Here, the value assignment of the global variables takes place. Please note that no function gets invoked here as it happens in the Function Execution Context. We will see that in a while.

// b)Function Execution Context (FEC): The function execution context goes through the same phases, creation and execution.
// The function execution phase has access to a special value called arguments. It is the arguments passed to the function. In our example, there are no arguments passed.

// And each of the execution contexts has two phases:
// 1) Creation Phase
// 2) Execution Phase


 //....................................

 //Q.5: What is creation phase and execution phase?

// Creation Phase:
// Compiler runs through the entire code for 2 time before actually executing the code,
// In the first run, It picks all function declarations and stores them in memory with their reference.
// In the second run, It picks all variables and assign undefined to them. In the event of a conflict between variable and function declaration name then that variable is ignored.

// Execution Phase:
// Variables assigned with values
// Functions executed

//......................................

//Q.6: What is meant by first class functions?

// The functions that can be assigned to any other variable or passed as an argument or can be returned by another function.
// JavaScript treat function as a first-class-citizens.
// This means that functions are simply a value and are just another type of object.

const Arithmetics = {
    add:(a, b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract:(a, b) => {
        return `${a} - ${b} = ${a-b}`
    },
    multiply:(a, b) => {
        return `${a} * ${b} = ${a*b}`
    },
    division:(a, b) => {
        if(b!=0) return `${a} / ${b} = ${a/b}`;
        return `Cannot Divide by Zero!!!`;
    }
 
}
 
console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));

// In the above program, functions are stored as a variable in an object.
  
//.....................................

//Q.7: What are closures? Give an example of closure

// Usually, a closure is created when a function is defined in another function, allowing the inner function to access variables in the outer one.
//Closures - Its not something that we create manually or explicitly. It happens automatically in certain 
// situations which we need to analyze/realize ourselves.
//// Closure makes a function remember all the variables that existed in the function birth place initially.
////Any function always have access to the "variable environment" of the execution context in which the function was 
// created.

const ticketbooking = function(){
    let passanger0 = 0;
    let passenger1 = 0;
    return function(){
        // passanger0 = 0; only for once then this will draf
        //so, even though the execution context is destroy, the variable environment somehow keep living some
        passanger0++;
        passenger1++;
        console.log(`the count of passanger are ${ passanger0} , ${ passenger1}`);

    }
}
const bookie = ticketbooking();
console.log(bookie);//function defination
console.dir(bookie);
bookie();
bookie();
bookie();


