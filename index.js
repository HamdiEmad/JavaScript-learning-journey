/* To print on console
    console.log("Hello, World!");
    console.log("This is a sample Node.js application.");
*/


/* Alert
    window.alert("This will not work in Node.js as 'window' is not defined in the server-side environment.");
*/

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
    console.log(counter);
    counter += 1;   Increment / counter++
    counter -= 1;   Decrement / counter--
    counter *= 2;   Multiplication
    counter /= 2;   Division
    counter **= 2;  Power 
    counter %= 2;   Modulo
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
    age+=1; Doing it this way will cause string concatenation
    age++; And that way, age will be dealt as a number

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
*/

/* Math object
    const val = Math.PI;

    document.getElementById("h1").textContent = val;
    
    let x = 3.21;
    let y = Math.round(x);
    let z = Math.floor(x);
    let a = Math.ceil(x);
    let b = Math.trunc(x);
    let c = Math.pow(x, 2);
    let d = Math.sqrt(x);
    let e = Math.log(x);
    let f = Math.sin(x);
    let g = Math.cos(x);
    let h = Math.tan(x);
    let i = Math.abs(x);
    let j = Math.sign(x);
    
    let n1 = 1, n2 = 2, n3 = 3;
    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);
    
    console.log(x, y, z, a, b, c, d, e, f, g, h, i, j, max, min);
*/

/* Random number generation
    const min = 50;
    const max = 100;

    document.getElementById("h1").textContent = Math.floor(Math.random() * (max - min)) + min;
*/

/* If statements
    let time = 9;

    if (time < 12)
    {
        console.log("Good morning");
    }
    else
    {
        console.log("Good afternoon");
    }

    let isOk = false;

    if (isOk)
        console.log("You are fine, bro");
    else
        console.log("Sorry for you.")
    
    const age = document.getElementById("text");
    const btn = document.getElementById("submit");
    const label = document.getElementById("h3");
    
    btn.onclick = function() {
        let temp = age.value;
        if (temp > 100)
            label.textContent = "You are too old";
        else if (temp >= 18)
            label.textContent = "You are authorized to enter";
        else if (temp > 0)
            label.textContent = "You are too young enough to get in";
            else if (temp == 0)
            label.textContent = "You were just born";
    
        else
            label.textContent = "Invalid age";
    }
*/

/* Checked Property: used with checkbox or a radio button
    const checkBox = document.getElementById("check");
    const visa = document.getElementById("visa");
    const master = document.getElementById("master");
    const paypal = document.getElementById("pay");
    const btn = document.getElementById("btn");
    const sub = document.getElementById("subs");
    const payment = document.getElementById("payment");

    btn.onclick = function()
    {
        if (checkBox.checked)
            sub.textContent = "You are a subscriper";
        else
            sub.textContent = "You are not a subscriper";

        if (visa.checked)
            payment.textContent = "Visa card activated";
        else if (master.checked)
            payment.textContent = "Mastercard card activated";
        else if (paypal.checked)
            payment.textContent = "Payment card activated";
        else 
            payment.textContent = "No activation";
    }
*/

/* Ternary operator
    const temp = document.getElementById("temp");
    const h = document.getElementById("h1");
    const btn = document.getElementById("sub");

    btn.onclick = function()
    {
        h.textContent = (temp.value > 35) ? "Sooo hot" : "Average";
    }
*/

/* Switch Case
    const day = document.getElementById("day");
    const h = document.getElementById("h1");
    const btn = document.getElementById("sub");

    btn.onclick = function()
    {
        switch (Number(day.value))
        {
            case 1:
                h.textContent = "Saturday"
                break;
            case 2:
                h.textContent = "Sunday"
                break;
            case 3:
                h.textContent = "Monday"
                break;
            case 4:
                h.textContent = "Tuesday"
                break;
            case 5:
                h.textContent = "Wednesday"
                break;
            case 6:
                h.textContent = "Thursday"
                break;
            case 7:
                h.textContent = "Friday"
                break;
            default:
                h.textContent = "Invalid day"
                break;
        }
    }
*/

/* String methods
    let name = "Hamdi-Emad";

    const h = document.getElementById("h1");

    h.textContent = name.charAt(1);
    h.textContent = name.indexOf("m");
    h.textContent = name.lastIndexOf("m");
    h.textContent = name.length;
    h.textContent = name.trim();
    h.textContent = name.toUpperCase();
    h.textContent = name.toLowerCase();
    h.textContent = name.repeat(2);
    h.textContent = name.startsWith("e");
    h.textContent = name.endsWith("d");
    h.textContent = name.includes(" ");
    h.textContent = name.replaceAll("-", " ");
    h.textContent = name.padStart(20, "0");
    h.textContent = name.padEnd(20, "0");
*/

/* String slicing
    const h = document.getElementById("h1");
    const fullName = "Hamdi Emad";

    h.textContent = fullName.slice(0, 5);
    h.textContent = fullName.slice(-4);
    h.textContent = fullName.slice(fullName.indexOf(" "));
*/

/* Method chaining
    let userName = window.prompt("Enter your username:");

    // ---------- NO METHOD CHAINING ---------- //

    userName = userName.trim();
    userName = userName.replaceAll(" ", "");
    userName = userName.toLowerCase();

    let first = userName.charAt(0);
    first = first.toUpperCase();

    userName = userName.slice(1);
    userName = first + userName;

    console.log(userName);
    
    // ---------- METHOD CHAINING ---------- //
    
    userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase().replaceAll(" ", "");

    console.log(userName);
*/

/* Logical operators
    const temp = document.getElementById("temp");
    const btn = document.getElementById("sub");
    const label = document.getElementById("h1");

    btn.onclick = function ()
    {
        if (temp.value > 25 && temp.value < 30)
        {
            label.textContent = "Weather is fine";
        }
        else if (temp.value >= 46 || temp.value <= 0)
            label.textContent = "Weather is insane";
        else if (temp.value >= 30 && temp.value <= 46)
            label.textContent = "Weather is hot";
        else if (temp.value <= 25 && temp.value > 18)
            label.textContent = "Weather is cold";
        else if (temp.value <= 18 && temp.value > 0)
            label.textContent = "Weather is to cold";
    }
*/

/* Strict equality: compare value and datatype
    let mask_1 = ('1' === 1);
    let mask_2 = ('1' !== 1);

    document.getElementById("h1").textContent = mask_1;
    document.getElementById("h1").textContent = mask_2;
*/

/* while loops
    let userName = "";

    while (userName === "" || userName === null)
        userName = window.prompt("Enter your name")

    console.log(userName);
    
    let userName = "";

    do {
        userName = window.prompt("Enter your name")
    } while (userName === "" || userName === null)

    console.log(userName);
*/

/* for loops
    for (let i = 0; i < 5; i++)
    {
        if (i == 3)
            continue;
        console.log(i);
    }

    for (let i = 0; i < 5; i++)
    {
        if (i == 3)
            break;
        else
            console.log(i);
    }
*/

/* Number Guessing Game
    const min = 1;
    const max = 100;
    const ans = Math.floor(Math.random() * (max - min + 1)) + min;

    let attempts = 0;
    let guess;
    let running = true;

    while (running)
    {
        guess = window.prompt(`Guess a number between ${min} and ${max}:`)
        guess = Number(guess);

        if (isNaN(guess) || guess < min || guess > max)
            window.alert("Please enter a valid number");
        else
            {
                attemps++;
                if (guess < ans)
                    window.alert("TOO LOW! TRY AGAIN!");
                else if (guess > ans)
                    window.alert("TOO HIGH! TRY AGAIN!");
                else
                {
                    window.alert(`CORRECT, The number was ${answer} and you tried for ${attempts} times`);
                    running = false;
                }
        }
    }
*/

/* Functions
    function hello(name, age)
    {
        document.getElementById("h1").textContent = name;
    }

    hello("Hamdi", 22);
    
    function func(x)
    {
        return x % 2 === 0 ? true : false ;
    }
    
    document.getElementById("h1").textContent = func("2");
*/

/* Variable Scope (local vs global)
    let x = 11;

    function f1()
    {
        console.log(x);
    }

    function f2()
    {
        console.log(x);
    }

    f2();
*/

/* Temperature Conversion game
    const temp = document.getElementById("temp")
    const kel = document.getElementById("kel")
    const feh = document.getElementById("feh")
    const btn = document.getElementById("btn")
    const res = document.getElementById("res")

    btn.onclick = function() {
        let tmp = temp.value;

        if (isNaN(tmp))
        {
            res.textContent = "Enter a valid number!";
        }

        else
        {
            if (kel.checked)
            {
                res.textContent = kelvin(tmp);
            }
            else if (feh.checked)
            {
                res.textContent = fehrenheit(tmp);
            }
            else
                res.textContent = tmp;
        }
    }


    function kelvin(temp)
    {
        return Number(temp) + 273.15;
    }

    function fehrenheit(temp)
    {
        return ((Number(temp) * 1.8) + 32);
    }
*/

/* Arrays
    let fruits = ["apple", "orange", "coconut", "banana"];

    //fruits[1] = "coconut"
    //fruits.push("orange");
    //fruits.pop();
    //fruits.unshift("coconut");
    //fruits.shift();

    // for (let i = 0; i < fruits.length; i++)
    //     console.log(fruits[i]);

    //let num = fruits.length;
    //let num = fruits.indexOf("orange");
    //let num = fruits.indexOf("mango");

    //fruits.sort();
    fruits.sort().reverse();

    for (let fruit of fruits)
    {
        console.log(fruit);
    }
*/

/* Spread operator : allows an iterable such as an array or string to be expanded into separate elements (unpack the elements).

    let nums = [1, 2, 3, 4, 5];

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    console.log(min, max);

    let username = "Hamdi Emad";
    let chars = [...username].join("-");

    console.log(chars);
    
    let num1 = [1, 2, 3];
    let num2 = [4, 5, 6];
    
    let all = [...num1, ...num2, 7, 8];
    
    console.log(all);
*/

/* Rest parameters : (...rest) allow a function work with a variable number of arguments by handling them into an array

spread = expand an array into separete elements
rest = bundles separate elements into an array
    
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 4;

    print_arr(a, b, c, d);

    let n = make_arr(1, 2, 3, 4, 5);
    console.log(n);

    function print_arr(...nums) {
        console.log(nums);
    }

    function make_arr(...nums) {
        return nums
    }
    
    function sum(...nums) {
        let res = 0;
        res = res;
    
        for (let num of nums)
        {
            res += num;  
        }
        return res;
    }
    
    const x = sum(2, 1, 10, 9);
    console.log(x);
    
    function concat(...names) {
        return names.join(" ");
    }
    
    const test = concat("Hamdi ", "Emad ", "Hamdi");
    console.log(test);
*/

/* Dice roller game
    function rollDice() {
        const numOfDice = document.getElementById("numOfDice").value;
        const diceResult = document.getElementById("result");
        const diceImages = document.getElementById("image");

        const values = [];
        const images = [];

        for (let i = 0; i < numOfDice; i++)
        {
            const value = Math.floor(Math.random() * 6 + 1);
            values.push(value);
            images.push(`<img src="Projects/Dice Roller/dice_images/${value}.png" alt = "Dice ${value}">`);
        }
        diceResult.textContent = `dice: ${values.join(', ')}`
        diceImages.innerHTML = images.join('');
    }
*/

/* Random Password Generator

    const passLength = document.getElementById("pass");

    const includeLowerCase = document.getElementById("lower");
    const includeUpperCase = document.getElementById("upper");
    const includeNumbers = document.getElementById("numbers");
    const includeSymbols = document.getElementById("symbols");
    const generatedPass = document.getElementById("h3");
    const generateBtn = document.getElementById("btn");

    generateBtn.onclick = function() {
        let generated = "";
        let pass = ""
        let length = passLength.value;

        const symbols = "!@#$%^&{}[]()~*-+/";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = lower.toUpperCase();
        const numbers = "0123456789";

        if (length <= 0)
            pass = `Password length must be at least 1 character`;
        
        generated += includeLowerCase.checked ? lower : "";
        generated += includeUpperCase.checked ? upper : "";
        generated += includeNumbers.checked ? numbers : "";
        generated += includeSymbols.checked ? symbols : "";

        if (generated.length === 0)
            pass = `Password should contain at least letters`
            else
            {
                for (let i = 0; i < length; i++)
                {
                    const char = Math.floor(Math.random() * generated.length);
                pass += generated[char];
                }
            }

        generatedPass.textContent = pass;
    }
*/

/* Callback : used to handle asynchoronous operations:
1. Reading a file
2. Network request
3. Interacting with databases

    function hello(callback)
    {
        console.log("Hello!");
        callback();
    }

    function goodbye()
    {
        console.log("Goodbye!");
    }

    hello(goodbye);
    
    function sum(n1, n2, callback)
    {
        let res = n1 + n2;
        callback(res);
    }
    
    function display(res)
    {
        console.log(res);
    }
    
    sum(2, 3, display);
*/

/* forEach() method : used to iterate over the elements of an array and apply a specified function (callback) to each element
array.forEach(callback)
element, index, array are provided

    let numbers = [1, 2, 3, 4, 5];

    numbers.forEach(double);
    numbers.forEach(display);

    function display(element)
    {
        console.log(element);
    }

    function double(element, index, array)
    {
        array[index] = element * 2;
    }
    
    let fruits = ["apple", "banana", "coconut", "orange"];
    
    fruits.forEach(capitalize);
    fruits.forEach(display);
    
    function display(element)
    {
        console.log(element);
    }
    
    function capitalize(element, index, array)
    {
        array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    }
*/

/* .map() method: accepts a callback and applies that function to each element of ana array, then return a new array

    const nums = [1, 2, 3, 4, 5];

    function square(element)
    {
        return Math.pow(element, 2);
    }

    function display(element)
    {
        console.log(element);
    }

    const squares = nums.map(square);
    squares.forEach(display);

*/

/* .filter() method: creates a new array by filtering our elements
    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr = numbers.filter(isEven);
    console.log(arr);


    function isEven(element)
    {
        return element % 2 === 0;
    }
*/

/* .reduce() method: reduce the element of a single array to a single value
    const nums = [1, 2, 3, 4, 5];

    function sum(accumulator, element)
    {
        return accumulator + element;
    }

    const total = nums.reduce(sum);

    console.log(total);
    
    const grade = [30, 60, 10, 85, 65, 90];
    
    function getMax(prev, next)
    {
        return Math.max(prev, next);
    }
    
    console.log(grade.reduce(getMax));
    console.log(Math.max(...grade));
*/

/* Function declaration: define a reusable block of code that perform a specific task

Function expressions: a way to define functions as values or variables

    const hello = function() {
        console.log("hello");
    }

    hello();
    
    setTimeout(function() {
        console.log("Hello!");
    }, 3000);
    
    const numbers = [1, 2, 3, 4, 5];
    
    numbers.forEach(function(element, index, array){
        array[index] = Math.pow(element, 2); 
    });
    
    console.log(numbers);
*/

/* arrow functions: a concise way to write functions that you use only once. (parameters) => some code

    // using function expression
    // const msg = function() {
    //     console.log("Hamdi");
    // }

    // using arrow function
    const msg = (name, age) => {console.log(`Hello, ${name}`)
    console.log(`You are ${age} old`)};

    msg("Hamdi", 22);

    setTimeout(() => console.log("Hello")
    , 3000);
    
    const numbers = [1, 2, 3, 4, 5];
    
    const squares = numbers.map((element, index, array) => Math.pow(element, 2)
    );
    
    console.log(squares);
*/

/* Object
    const person = {
        firstName: "Hamdi",
        lastName: "Elgohary",
        age: 22,
        sayHello: () => console.log("Hello"),
    };

    console.log(person);
    console.log(person.age);
    person.sayHello();
*/

/* this keyword
    const person = {
        name: "Hamdi",
        age: 22,
        sayInfo: function(){console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`)},
    };

    person.sayInfo();
*/

/* Constructor
    function person(name, age) {
        this.name = name,
        this.age = age
        this.identify = function(){console.log(`My name is ${this.name} and I am ${this.age}`)};
    };

    const person1 = new person("Hamdi", 22);

    person1.identify();
*/

/* Classes
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`Hello from ${this.name}`);
        }
    }

    const person1 = new Person("Hamdi", 22);
    person1.sayHello();
*/

/* Static keywod
    class util {
        static PI = 3.14159;
        static getDiameter(radius) {
            return 2 * radius;
        }

        static getCircumference(radius) {
            return 2 * this.PI * radius;
        }
    }

    console.log(util.PI);
    console.log(util.getCircumference(7));
    
    class Person {
        static numOfPersons = 0;
        constructor(name, age) {
            this.name = name;
            this.age = age;
            Person.numOfPersons++;
        }
    }
    
    const person1 = new Person("Hamdi", 22);
    console.log(Person.numOfPersons);
    const person2 = new Person("Ahmed", 16);
    console.log(Person.numOfPersons);
    const person3 = new Person("Loay", 51);
    console.log(Person.numOfPersons);
    const person4 = new Person("Sayed", 36);
    console.log(Person.numOfPersons);
*/

/* Inheritance
    class Animal {
        alive = true;

        eat() {console.log(`This ${this.name} is eating`)};
    }

    class Rabbit extends Animal {
        name = "Rabbit"
    }

    const rabbit = new Rabbit();

    rabbit.eat();
*/

/* super: it is used in classes to call the constructor or access the properties and methods of a parent (superclass)
this => this object
super => the parent

    class Animal {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        move(speed) {
            console.log(`This ${this.name} is moving at a speed of ${this.speed}m/s`);
        }
    }

    class Rabbit extends Animal {
        constructor(name, age, runSpeed) {
            super(name, age);
            this.runSpeed = runSpeed;
        }
        run() {
            console.log(`This ${this.name} can run`);
            super.move(this.runSpeed);
        }
    }
        
    class Fish extends Animal {
        constructor(name, age, swimSpeed) {
            super(name, age);
            this.runSpeed = swimSpeed;
        }
    }

    const rabbit = new Rabbit("r1", 3, 12);
    console.log(rabbit);
*/

/* Getters & Setters

    class Rectangle {
        constructor(width, length) {
            this.width = width;
            this.length = length;
        }

        set width(newWidth) {
            if (newWidth > 0)
                this._width = newWidth; // for private property
            else
                console.error("Width must be a positive number");
        }

        set length(newLength) {
            if (newLength > 0)
                this._length = newLength; // for private property
            else
                console.error("Length must be a positive number");
        }

        get width() {
            return this._width;
        }

        get length() {
            return this._length;
        }
    }

    const rectangle = new Rectangle(1, 5);
    console.log(rectangle.width);
*/

/* Destructuring: extract values from arrays and objects then assign them to variables in a convenient way
[] => to perform array destructuring
() => to perform object destructuring

    // EX1: Swapping of two variables
    let a = 1;
    let b = 2;

    console.log(a, b);

    [a, b] = [b, a];

    console.log(a, b);
    
    // EX2: Swap two element in an array
    const nums = [1, 2, 3, 4, 5];
    console.log(nums);
    [nums[0], nums[4]] = [nums[4], nums[0]];
    console.log(nums);

    // EX3: assign array elements to variables
    const colors = ["red", "green", "yellow", "blue", "white"];
    
    const [first, second, third, ...extra] = colors;
    
    console.log(first, second, third);
    console.log(extra);

    // EX4: extract values from object
    const person = {
        firstName: "Hamdi",
        lastname: "Elgohary",
        age: 22,
    }
    
    const {firstName, lastname, age} = person;
    
    console.log(firstName, lastname, age);
    
    // EX5: Destructure in function parameters
    const person = {
        firstname: "Hamdi",
        lastname: "Elgohary",
        age: 22,
    }
    
    function displayPerson({firstname, lastname, age, job = "Engineer"}) {
        console.log(`name: ${firstname} ${lastname}`);
        console.log(`age: ${age}`);
        console.log(`job: ${job}`)
    }
    
    displayPerson(person);
*/

/* nested objects: Objects inside of other objects
    const person = {
        fullName: "Hamdi Emad",
        age: 22,
        address: {
            street: "124 lol St.",
            city: "homosiya",
            country: "Locomotia"
        }
    }

    console.log(person.fullName);
    console.log(person.age);
    console.log(person.address);
*/

/* Array of objects
    const fruits = [{name: "apple", color: "red", price: 5},
                {name: "banana", color: "yellow", price: 2},
                {name: "orange", color: "orange", price: 3},
                {name: "grape", color: "purple", price: 4},
                {name: "strawberry", color: "red", price: 6}];

    fruits.forEach(fruit => console.log(fruit));

    const fruitnames = fruits.map((element) => element.name);

    console.log(fruitnames);
*/

/* sort() : method used to sort elements of an array in place.
    sort elements as strings in lexicographic order, not alphabetical.
    lexicographic = (alphabet + numbers + symbols) as strings

    let numbers = [1, 2, 5, 6, 10, 3, 8, 4, 7, 9];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
*/

/* shuffle an array
    const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

    shuffle(cards);

    console.log(cards);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));

            [array[i], array[random]] = [array[random], array[i]]
        }
    }
*/

/* Date objects
    const date = new Date();
    console.log(date);
    const date2 = new Date(2004, 10, 4, 3, 45, 24, 6);
    console.log(date2);
    const date3 = new Date("2004-11-04T12:00:00Z");
    console.log(date3);
    const date4 = new Date(1700000000000);
    console.log(date4);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    console.log(year);
    console.log(month);
    console.log(day);
    console.log(dayOfWeek);
    console.log(hour);
    console.log(minute);
    console.log(second);
*/

/* Closure: a function defined inside of another function, the inner function has access to the variables and scope of the outer function.
    Allow for private variables and state maintenance.
    Used frequently in JS frameworks: React, Vue, Angular

    function outer() {
        let message = "Hello";
    
        function inner() {
            console.log(message);
        }
    
        inner();
    }
    
    outer();
*/

/* setTimeout(callback, delay)  
    const timeID = setTimeout(() => window.alert("Hello"), 3000);
    clearTimeout(timeID);

    let timeID;
    
    function start() {
        timeID = setTimeout(() => {
            window.alert("Hello");
        }, 3000);
    }
    
    function cancel() {
        clearTimeout(timeID);
    }
*/

/* Digital Clock Program
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        const meridiem = hours >= 12 ? "PM" : "AM";
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
        document.getElementById("clock1").textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);
*/

/* Stop Watch Program

    const time = document.getElementById("timer");

    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    console.log(Date.now())

    function start() {
        if (!isRunning) {
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10);
            isRunning = true;
        }
    }

    function stop() {
        if (isRunning) {
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }

    function reset() {
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        time.textContent = "00:00:00:00"
    }

    function update() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = hours.toString().padStart(2, 0);
        minutes = minutes.toString().padStart(2, 0);
        seconds = seconds.toString().padStart(2, 0);
        milliseconds = milliseconds.toString().padStart(2, 0);

        time.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
*/

/* E26 Module: an external fime that contains reusable code that can be imported into JS files.
    Write reusable code from many different apps.
    Can contain variables, classes, functions ... and more.
    introduced as part of ECMAScript 2015 update.

    import {PI, getArea, getVolume, getCircumference, getSurfaceArea} from './util.js';
    
    console.log(PI);
    console.log(getCircumference(3).toFixed(2));
    console.log(getSurfaceArea(13).toFixed(2));
    console.log(getVolume(13).toFixed(2));
*/

/* synchronous = Executes line by line consecutively in a sequential manner
Code that waits for an operation to complete.

    asynchronous = Allows multiple operations to be performed concurrently without waiting
    Doesn't block the execution flow and allows the program to continue.
    (I/O operations, network requests, fetching data)
    Handled with: Callbacks, Promises, Async/Await
    // Async timeout function
    setTimeout(() => console.log("Task 1"), 3000);
    
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");

    // sync
    function func1(callback) {
        setTimeout(() => {
            console.log("Task 1");
            callback();
        }, 3000);
        
    }
    
    function func2() {
        console.log("Task 2");
        console.log("Task 3");
        console.log("Task 4");
    }
    
    func1(func2);
*/

/* Errors
    try { } = Encloses code that might potentially cause an error
    catch {} = Catch and handle any thrown Errors from try { }
    finally {}=(optional) Always executes. Used mostly for clean up
    ex. close files, close connections, release resources
    
    try {
        console.log(x);
        // NETWORK ERRORS
        // PROMISE REJECTION
        // SECURITY ERRORS
    
    }
    catch(error)
    {
        console.error(error);
    }
    finally {
        // CLOSE FILES
        // CLOSE CONNECTIONS
        // RELEASE RESOURCES
        console.log("This will always executes");
    }
    
    console.log("End of program has been reached successfully");

    try {
    
        const dividend = window.prompt("Enter a dividend: ");
        const divisor = window.prompt("Enter a divisor: ");
    
        if (divisor == 0){
            throw new Error("You can't divide by zero!");
        }
    
        if (isNaN(dividend) || isNaN(divisor)){
            throw new Error("You have to enter only numbers!");
        }
    
        const result = dividend / divisor;
        console.lag(result);
    }
    
    catch (error) {
        console.error(error);
    }
    console.log("You have reached the end!");
*/

/* Calculator program

    const res = document.getElementById("result");

    function appendKey(key) {
        if (res.textContent === "0") {
            res.textContent = key;
        }
        else {
            res.textContent += key;
        }
    }

    function clearCalc() {
        res.textContent = "";
    }

    function calculate() {
        try
        {
            res.textContent = eval(res.textContent);
        }
        catch(error)
        {
            res.textContent = "Error";
        }
    }
*/

/* DOM = DOCUMENT OBJECT MODEL|
    Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
    Web browser constructs the DOM when it loads an HTML document,
    and structures all the elements in a tree-like representation.
    JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

    console.log(document);
    console.dir(document);
    
    document.title = "My website"
    const welcomeMsg = document.getElementById("hello");
    
    welcomeMsg.textContent = "TEST";
    document.body.style.backgroundColor = "Black";
*/

/* Element selectors

    const heading = document.getElementById("hello");
    heading.style.backgroundColor = "red";

    const fruits = document.getElementsByClassName("fruits");
    console.log(fruits);
    for (let fruit of fruits)
        fruit.style.backgroundColor = "yellow";
    Array.from(fruits).forEach(fruit => {
        fruit.style.backgroundColor = "blue";
    })

    const h4Elements = document.getElementsByTagName("h4");
    const list = document.getElementsByTagName("li");
    for (let element of h4Elements)
        element.style.backgroundColor = "yellow";
    for (let element of list)
    element.style.backgroundColor = "cyan";
    
    const element = document.querySelector(".fruits");
    element.style.backgroundColor = "yellow";

    const foods = document.querySelectorAll("li");
    
    foods.forEach(food => {
        food.style.backgroundColor = "yellow";
    })
*/

/* DOM naviggation

    const element = document.getElementById("u1");
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "yellow";

    const elements = document.querySelectorAll("ul");
    elements.forEach(element => {
        const lastChild = element.lastElementChild;
        lastChild.style.backgroundColor = "cyan";
    });

    const element = document.getElementById('1');
    element.nextElementSibling.style.backgroundColor = "yellow";
    
    const element = document.getElementById('2');
    element.previousElementSibling.style.backgroundColor = "lightgreen";
    
    const element = document.getElementById('3');
    element.parentElement.style.backgroundColor = "lightgreen";

    const element = document.getElementById('u1');
    const children = element.children;
    Array.from(children).forEach(child =>{
        child.style.backgroundColor = "red";
    })
*/

/* Add & change HTML elements using JS

    const newH1 = document.createElement("h1");
    newH1.textContent = "Hamdi";
    newH1.id = "myH1";
    newH1.style.color = "red";
    newH1.style.textAlign = "center";

    // document.body.prepend(newH1);
    //document.getElementById("box1").prepend(newH1);
    // const box2 = document.getElementById("box2");
    // document.body.insertBefore(newH1, box2);

    // const boxes = document.querySelectorAll(".box");
    // document.body.insertBefore(newH1, boxes[2]);
    // document.body.append(newH1);
    // document.body.removeChild(newH1);
    // document.getElementById("box1").append(newH1);
    // document.getElementById("box1").removeChild(newH1);
*/

/* eventListener :Listen for specific events to create interactive web pages
events: click, mouseover, mouseout
.addEventListener(event, callback);

    const box = document.getElementById("box");

    box.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "OUGH! 😊";
    });

    box.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "HEY! 😊";
    })

    box.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "aqua";
        event.target.textContent = "Click me 😊";
    })
*/

/* Key events

    document.addEventListener("keydown", event => {
        console.log(event.key);
    })

    document.addEventListener("keyup", event => {
        console.log(event.key);
    })
    
    const box = document.getElementById("box");
    
    document.addEventListener("keydown", event => {
        box.style.backgroundColor = "cyan";
        console.log(event.key);
    })
    
    document.addEventListener("keyup", event => {
        box.style.backgroundColor = "tomato";
        console.log(event.key);
    })
*/

/* Show & hide HTML element using JS

    const btn = document.getElementById("btn");
    const img = document.getElementById("image");
    let isShown = true;

    btn.addEventListener("click", event => {
        if (isShown) {
            img.style.visibility = "hidden";
            btn.textContent = "show";
            isShown = false;
        }
        else {
            img.style.visibility = "visible";
            btn.textContent = "hide";
            isShown = true;
        }
    })
*/

/* NodeList: Static collection of HTML elements by (id, class, element)
    Can be created by using querySelectorAll()
    Similar to an array, but no (map, filter, reduce)
    NodeList won't update to automatically reflect changes

    let btns = document.querySelectorAll(".btn");
    
    const newbtn = document.createElement("button");
    newbtn.textContent = "btn5";
    newbtn.classList = "btn";
    document.body.append(newbtn);
    
    btns.forEach(button => {
        button.addEventListener("click", event => {
            event.target.remove();
        });
        
        button.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "lightgreen";
        });
        
        button.addEventListener("mouseout", event => {
            event.target.style.backgroundColor = "red";
        });
    });
    
    btns = document.querySelectorAll(".btn");
*/

/* classList: Element property in JavaScript used to interact
with an element's list of classes (CSS classes)
Allows you to make reusable classes for many elements
across your webpage.

    btn.classList.add("enabled");
    btn.classList.remove("enabled");
    
    btn.addEventListener("mouseover", event => {
        event.target.classList.add("hover");
    })

    btn.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
    
    btn.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })

    const btn = document.getElementById("btn");
    
    btn.classList.add("enabled");
    
    btn.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += " SHIT";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
*/

/* ROCK PAPER SCISSORS

    const playerChoice = document.getElementById("player");
    const computerChoice = document.getElementById("computer");
    const playerPoints = document.getElementById("player-score");
    const computerPoints = document.getElementById("computer-score");
    const result = document.getElementById("result");

    const choise = ["ROCK", "PAPER", "SCISSORS"];
    let playerScore = 0;
    let computerScore = 0;

    const btns = document.querySelectorAll(".btns");
    btns.forEach(btn => {
        btn.addEventListener("click", event => {
            let game = computer();
            if (event.target === btns[0]) {
                playerChoice.textContent = "Player: " + choise[0];
                calcWinner(0, game);
            }
            else if (event.target === btns[1]) {
                playerChoice.textContent = "Player: " + choise[1];
                calcWinner(1, game);
            }
            else {
                playerChoice.textContent = "Player: " + choise[2];
                calcWinner(2, game);
            }
        })
    });

    function computer() {
        let comp = Math.floor(Math.random() * 3);
        computerChoice.textContent = "Computer: " + choise[comp];
        return comp;
    }

    function calcWinner(player, computer) {
        result.classList.remove("lose", "win");
        if (player === computer)
            result.textContent = "It's a TIE";
        else {
            if (computer - player === 1 ||  
                player - computer === 2) {
                result.textContent = "Computer wins";
                result.classList.add("lose");
                computerScore++;
            }
            else if (computer - player === 2 || player - computer === 1) {
                result.textContent = "Player wins";
                result.classList.add("win");
                playerScore++;
            }
            else {
                result.textContent = "INVALID";
            }
            playerPoints.textContent = "Player score: " + playerScore;
            computerPoints.textContent = "Computer score: " + computerScore;
        }
    }
*/
