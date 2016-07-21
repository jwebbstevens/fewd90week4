//conversion formula,  i think 9/5 and 5/9 are better also why do we need a button? less clicks for the end user//
function convert(degree) {
    if (degree == "C") {
        var F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else {
        var C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}

var factItems = document.querySelectorAll('.fact');
var randomNumber = (Math.floor(Math.random() * 5));

factItems[randomNumber].style.display = 'block';
