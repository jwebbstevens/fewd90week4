//conversion formula,  i think 9/5 and 5/9 are better also why do we need a button? less clicks for the end user//
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else {
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}

// randomized facts - doesn't work, I'll keep trying//
function(){
    (".various"+(new Date().getTime() % 2)).css("display", "block");
};

