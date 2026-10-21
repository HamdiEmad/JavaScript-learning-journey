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