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