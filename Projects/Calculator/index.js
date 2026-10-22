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