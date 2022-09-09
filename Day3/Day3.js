//Q.1: What are promises and why do we need them?

//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.it is used to avoid call back, use to call api
// a Promise object is created that takes two functions: resolve() and reject() . resolve() is used if the process is successful and reject() is used when an error occurs in the promise. The promise is resolved if the value of count is true.

const getId1 = new Promise((resolve, reject) => { //prodecer // resolve and reject are executor function
        setTimeout(()=> {
            let id= [1,2,3,4,5];
            //resolved(id);
            reject("error in fetching details");
        }, 3000);//timeout period 3sec
    
    });
    
    getId1                 //consumer
    .then((data)=>{
        console.log("the data resolved",data);
    })
    .catch((error)=> {
        console.log(error);
    })
    .finally(()=> {
        console.log("end of promise");
    });

//..........................................

//Q.2: What is the purpose of async/await keywords?

// They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name.
// Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.

//The async keyword turns a method into an async method, which allows you to use the await keyword in its body. When the await keyword is applied, it suspends the calling method and yields control back to its caller until the awaited task is complete. await can only be used inside an async method.

async function tryingPromises(){//continued with line 2.
    console.log("I am inside the function using async/await");//3.
    const response = await fetch("https://api.github.com/users");//4.th line initiated but not finished//i will continue from here later, because I am asked to wait but I have other options to execute other lines also.
    console.log("before the response is fetched");
    const users = await response.json();
    console.log("Users resolved");

    return users;
}

console.log("Before calling the function");//1.
let data = tryingPromises();//2./ new Promise(resolve,reject)
console.log("After calling the function");//this was the 4th line that got completed
console.log("data received",data);
data.then((res)=>{
    console.log(res);
})
// data.catch((err)=>{
//     console.log(err);
// })
console.log("End Of Code");

//.....................................................

//Q.3: What is hoisting? 
// Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 

// It allows us to call functions before even writing them in our code. 

//only var support hoisting not let and const

// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

//............................................

//Q.4: What is the DOM?

// The Document Object Model (DOM) is a programming interface for HTML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
//HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM). DOM is basically the representation of the same HTML document but in a different format with the use of objects.

const element1 = document.getElementById("Text");
console.log(element1);
console.log(element1.innerText);
console.log(element1.innerHTML);

//...........................................

//Q.5: Difference between undefined vs not defined vs NaN

// they both are related to memory space and there is a very simple difference between them. If the variable name which is being accessed doesn’t exist in memory space then it would be not defined, and if exists in memory space but hasn’t been assigned any value till now, then it would be undefined.whereas, NaN stands for Not a Number. It represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a number.

//Example 1: The global execution context will be created and in the memory allocation phase, the var a will get space in memory, and JavaScript will assign undefined to it. During the thread of execution, the JavaScript will encounter the first line console.log(a) and as we haven’t assigned the value for a, undefined will be printed on the console. In the next line, we have assigned 5 to a, hence the variable a is no more undefined. Now it contains the value 5. So next time whenever we access the variable a, it won’t be evaluated as undefined. So it will print the actual value of a.
console.log(a);
var a = 5;
console.log(a);

//Example 2: First of all, global execution context will be created and in the memory allocation phase, the variable “a” will get space in memory, and by default, JavaScript assigns undefined to “a”. During the thread of execution, the “console.log(a)” will be printed as undefined. In the next line, we have assigned 5 to variable a. In the console, 5 will be printed. At the last line when JavaScript encounters the “console.log(b)” it searches for “b” inside the memory heap of execution context but it is not available, the JS engine will throw the “Reference Error” with a message of “b is not defined“. The JavaScript will stop execution when it encounters a reference error.

  console.log(a);
  var a = 5;
  console.log(a);
  console.log(b);

//   In this example, we will use JavaScript Number NaN Property.

var monthNumber = 14;
  
if (monthNumber < 1 || monthNumber > 12) {
  
    // Assigning monthNumber NaN as 
    // month number is not valid
    monthNumber = Number.NaN;
  
    console.log("Month number should be"
                + " between 1 and 12");
}
else {
    console.log(monthNumber);
}

  //..........................................................

//Q.6: How many operators do we have in JS ?

//Arithmetic Operators : %,- , +,/, * 
// Comparison Operators : ==, ===, !=, !==, >, <, >=, <=
// Bitwise Operators:
//  Bitwise And - a&b
// Bitwise OR - a|b
// Bitwise XOR - a^b
// Bitwise NOT - ~a
// Left Shift - a << b
// Sign Propagating Right Shift - a >> b
// Zero fill Right shift - a >>> b

// Increment,Decrement Operators : 
// Postfix increment - a++
// Prefix increment - ++a

// Postfix decrement - a--
// Prefix decrement - --a

// Logical Operators: &&, ||, !
// Ternary Operators:Condition ? Val1 : val2
// Comma Operator: ,


//....................................................

//Q.7: What is callback hell

// This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.

//so,How to escape from a callback hell?

// JavaScript provides an easy way of escaping from a callback hell. This is done by event queue and promises.
// A promise is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result.
// Promises use .then() method to call async callbacks.

const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();

//............................................

//Q.8: What is promise chaining
// Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.

//if one will stuck then other will also stuck so we have to handle carefully

const add = (a, b) => {     
    return new Promise((resolve, reject) => {        
        setTimeout(() => {            
            if (a < 0 || b < 0) {                 
                return reject('Numbers must be non-negative')
            } 
            resolve(a + b)         
        }, 2000) 
    })
}
  
add(1, 2).then((sum) => {     
    console.log(sum)  // Print 3   
    return add(sum, 4)
}).then((sum2) => {     
    console.log(sum2) // Print 7 
}).catch((e) => { 
    console.log(e) 
});

//..................................................

//Q.9: What are arrow functions?

// Arrow function: it is most use function, we dont have to use function keyword here, it will call everything  apart from name.Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. it's a shorter syntax and thus requires less code.

const addition = (a,b) => {
  let result = a+b;
  console.log(result);
}
console.log(addition);
addition(4,8);

//......................................

//Q.10: Give an example of async/await

//"async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" GeeksforGeeks..");
      }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
  }
   
  async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
  }
   
  display();
