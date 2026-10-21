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