//Q.1: Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

//Call, Apply, Bind - They are used for function Borrowing.
// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

//call: 

var person1 = {firstName: 'good', lastName: 'bye'};
var person2 = {firstName: 'you', lastName: 'tube'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello good bye
say.call(person2, 'Hello'); // Hello you tube


//apply:

var person1 = {firstName: 'good', lastName: 'bye'};
var person2 = {firstName: 'you', lastName: 'tube'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello good bye
say.apply(person2, ['Hello']); // Hello you tube

//bind:

var person1 = {firstName: 'good', lastName: 'bye'};
var person2 = {firstName: 'you', lastName: 'tube'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello good bye
sayHelloKelly(); // Hello you tube

//........................................


//Q.2:What are objects in javascript?

// In JavaScript, almost "everything" is an object.
// In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
// The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
// JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.

// To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

//The person object has two properties firstName and lastName with the corresponding values 'John' and 'Doe'.

//...............................................

//Q.3:What are function constructors?

// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.

// The purpose of a constructor is to create a new object and set values for any existing object properties.

// When a constructor gets invoked in JavaScript, the following sequence of operations take place:

// A new empty object gets created.
// The this keyword begins to refer to the new object and it becomes the current instance object.
// The new object is then returned as the return value of the constructor.

// When the this keyword is used in a constructor, it refers to the newly created object:

//it is good practice to keep the first letter of name in capital

//new and this keyword is mando

//Constructor
function User() {
    this.name = 'Bob';
}

var user = new User();

//.........................

//Q.4: Explain prototypes

// Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.
// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

const parent = {
    value: 2,
    method() {
      return this.value + 1;
    }
  };
  console.log(parent.method()); // 3

  const child = {
    __proto__: parent,
  };
  console.log(child.method()); // 3  
  child.value = 4;
  console.log(child.method()); // 5

  //Attaching the methods to parent and use those methods in child object using parents prototype

  //......................................

  //Q.5:What is prototype chain

//   The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

  let myArr = [1,2,3,4,5];
console.log(myArr.__proto__);//constructor
console.log(myArr.__proto__.__proto__);//object
console.log(myArr.__proto__.__proto__.__proto__);//null

//.......................................

//Q.6:Give an example of inheritance using function constructor

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}

// Creating objects
let Employee1 = new Employee("fahad", 18, "Male", 5);
let Developer1 = new Developer("Asma", 21, "Female", 3,
    "Full stack Developer");
console.log(Employee1);
console.log(Developer1);

//We can observe that the constructor function of Employee is inherited to create a new constructor function Developer which can be used to create objects with new properties along with the inherited properties of the parent constructor.

//.......................................

//Q.7: What are callbacks?

// The function that we pass as an argument to another function is called the callback function.
// If we want to execute a function right after the return of some other function, then callbacks can be used.

// JavaScript functions have the type of Objects. So, much like any other objects (String, Arrays etc.), They can be passed as an argument to any other function while calling.

 // add() function is called with arguments a, b
   // and callback, callback will be executed just 
   // after ending of add() function
   function add(a, b , callback){
    document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
    callback();
    }
      
    // disp() function is called just
    // after the ending of add() function 
    function disp(){
    document.write('This must be printed after addition');
    }
      
    // Calling add() function
    add(5,6,disp);   


    // the callback are needed because js is event driven language 
    //.........................................

    //Q.8: What is the use of setTimeout

    // The setTimeout() function registers the function provided as a parameter to be executed after some provided(3000) milliseconds. The browser keeps a record of it internally and as soon as the timer expires, it enqueues that function to the callback queue.

    // The setTimeout() method executes a block of code after the specified time. The method executes the code only once

    // setTimeout and setInterval
     setInterval((param1, param2, param3) => {
    console.log("Hey hi", param1, param2, param3)
    }, 2*1000, "apple","oranges","guava");


    //...........................................

    //Q.9: What are pure functions?

    // A Pure Function has all the above characteristics. It is a function that produces the same output for the same input. It means it returns the same result when you pass the same arguments. A pure function shouldn't have any side effects to change the expected output.

    function CalculateGST(prize){
        console.log(prize*0.2);
    }
    CalculateGST(8)
    //it is called well define function
   




















//............................
