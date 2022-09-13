//Q.1: Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

$('button').click(() => {
    let element0 = document.createElement("h1");
    element0.innerText = 'MERN Stack';
    document.querySelector('.head').appendChild(element0);

})

//Q.2: Write code to get 1st H1 element from a webpage using DOM

// const element2 = document.getElementsByTagName("h1");
//     console.log(element2[0]);

//Q.3:Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

// function clock(){
//     let hh = document.getElementById("hh");
//     let mm = document.getElementById("mm");
//     let ss = document.getElementById("ss");

//     let time = new Date();
//     let hrs = time.getHours();
//     let mins = time.getMinutes();
//     let secs = time.getSeconds();

//     hh.innerText = hrs;
//     mm.innerText = mins;
//     ss.innerText = secs;
// }
// clock();
// setInterval(clock,1000);

//Q.4:Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

// const button = document.getElementById('btn');
// button.addEventListener('click',() => {
// const replace = document.getElementById('replace');
// replace.innerText = '"Welcome to Elevation academy"';
// button.innerText = 'Replaced';})

//Q.5:Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

// $(".Hide-Text").click(function () {
// 	$("p").hide();
// });


//Q.6:Given an array of 0's and 1's find out number of 0's
// let array = [1,0,1,0,1,0];
// let count=0;
// for(let i of array){
//     if(i == 0){
//          count=count+1;
//     }
// }

// console.log(count);


//Q.7:Given an array find out total no. of odd and even no.

// function CountingEvenOdd(arr, arr_size)
// {
//     let even_count = 0;
//     let odd_count = 0;
 
//     // loop to read all the values in the array
//     for (let i = 0; i < arr_size; i++) {
         
//         // checking if a number is completely
//         // divisible by 2
//         if (arr[i] & 1 == 1)
//             odd_count++;
//         else
//             even_count++;
//     }
 
//     console.log("Number of even elements = " + even_count);
//      console.log("Number of odd elements = " + odd_count);
// }
//     let arr = [ 2, 3, 4, 5, 6 ];
//     let n = arr.length;
     
//     // Function Call
//     CountingEvenOdd(arr, n);

//Q.8:Given a string find out number of vowels 

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('set')); // 1

// Q.9:Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

let obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(o1, o2) {
    let arr1 = o1.b;
    let arr2 = o2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false


