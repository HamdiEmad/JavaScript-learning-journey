// To print on console

// console.log("Hello, World!");
// console.log("This is a sample Node.js application.");

// window.alert("This will not work in Node.js as 'window' is not defined in the server-side environment.");

/*
This is a multi-line comment.
You can write multiple lines of comments here.
*/

/* This section to use JS to replace text of an html tag
    document.getElementById("H1").textContent = "Hello, World!";

    document.getElementById("P1").textContent = "This is a paragraph";
*/

/* Variables
    let x = 100;
    console.log(typeof x);
    console.log(`${x}`);

    let name = "Hamdi";
    console.log(`My first name is ${name} and varialble name is a ${typeof name}`);

    let flag = true;
    console.log(`It is ${flag} and the varialble flag is ${typeof flag}`);

    let fullname = "Hamdi Emad";
    let age = 22;
    let student = true;

    document.getElementById("p1").textContent = `Your name is ${fullname}`;
    document.getElementById("p2").textContent = `My age is ${age}`;
    document.getElementById("p3").textContent = `Student status : ${student}`;
*/


/* Arithmetic operators
    let counter = 20;
    //console.log(counter);
    //counter += 1;   Increment / counter++
    //counter -= 1;   Decrement / counter--
    //counter *= 2;   Multiplication
    //counter /= 2;   Division
    //counter **= 2;  Power 
    //counter %= 2;   Modulo
    console.log(counter);

    Operator precedence
        1. Parenthesis
        2. Exponents
        3. Multiplication & Division & Modulo
        4. Addition & Subtraction
*/


/* Accept user input
    Easy way
    let name;
    name = window.prompt("What is your name?");
    console.log(name);
    
    Professional way
    let username;
    
    document.getElementById("submit").onclick = function() {
        username = document.getElementById("text").value;
        document.getElementById("h1").textContent = `Hello, ${username}`;
    }
*/


/* Type conversion
    let age = window.prompt("What is your age");
    console.log(typeof age);
    //age+=1; Doing it this way will cause string concatenation
    //age++; And that way, age will be dealt as a number

    age = Number(age);
    console.log(typeof age);
    age += 1;

    document.getElementById("h1").textContent = age;
    
    let x = "Pizza";
    let y = "Pizza";
    let z = "Pizza";
    
    x = Number(x); Converting a string into a number will cause an NaN bug
    y = String(y); Nothing happens
    z = Boolean(z); if a string is not empty, it will be always true and false otherwise and in case of uninitialized variables.
    
    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);
*/

/* Consts
    const PI = 3.14159;
    let radius;
    let circumference;

    document.getElementById("button").onclick = function() {
        radius = document.getElementById("input").value;
        circumference = 2 * PI * radius;
        document.getElementById("cir").textContent = `Circumference = ${circumference}`;
    }
*/

/* Counter Program
*/

const inc = document.getElementById("inc")
const rst = document.getElementById("rst")
const dec = document.getElementById("dec")

const counter = document.getElementById("count")

let count = 0;

inc.onclick = function() {
    count++;
    counter.textContent = `${count}`
}

rst.onclick = function() {
    count = 0;
    counter.textContent = `${count}`
}

dec.onclick = function() {
    count--;
    counter.textContent = `${count}`
}

