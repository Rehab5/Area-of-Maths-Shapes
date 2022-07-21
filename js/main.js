// two integers displaying the larger of them
// a)
var firstNo = parseInt(document.getElementById("firstNo"));
var secondNo = parseInt(document.getElementById("secondNo"));
const largInteger = document.getElementById("check");

largInteger.onclick = function LargestInteger() {
    if (firstNo > secondNo) {
        window.alert(firstNo.value + " " + "is Larger");
    } else if (secondNo > firstNo) {
        window.alert(secondNo.value + " " + "is Larger");
    } else {
        window.alert("Operation Error Try Again!");
    }

}





// checking an integer even or odd
// b)
var Num = parseInt(document.getElementById("enterNo"));
var evenOdd = document.getElementById("submit");

evenOdd.onclick = function EvenOdd() {
    if (0 === Num % 2) {
        alert(Num.value + " " + " is an Even Number");
    } else if (0 !== Num % 2) {
        alert(Num.value + " " + " is an Odd Number");
    } else {
        alert("This is not an Even or Odd Number");
    }

}