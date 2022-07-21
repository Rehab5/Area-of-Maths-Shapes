// assignment maths-shapes
// Finding the diagonal of square using any value not only 9;
// a)

var MyValue = document.getElementById("myInput");
var buttonEl = document.getElementById("myBtn");
var Result = document.getElementById("result");

buttonEl.onclick = function calD() {
    // "use strict";
    Result.innerHTML = MyValue.value * Math.sqrt(2);
}



// ///////////////////////////////////////////////////////////////////////////////////////////////////




// Finding the area of a triangle for any values
// b)
// var sideST = document.getElementById("side1");
// var sideND = document.getElementById("side2");
// var sideRD = document.getElementById("side3");

// var btnResult = document.getElementById("calcArea");
// var triArea = document.getElementById("area");

// btnResult.onclick = function calArea() {
//     var s = ((sideST.value) + (sideND.value) + (sideRD.value)) / 2;
//     console.log(s);
//     var result = Math.sqrt((s * (s - sideST.value) *
//         (s - sideND.value) * (s - sideRD.value)));
//     triArea.innerHTML = result;
// }


// for just this value code will be like this and there is no need for <input> element in html page
var sideST = 5;
var sideND = 6;
var sideRD = 7;
var btnResult = document.getElementById("calcArea");
var triArea = document.getElementById("area");

btnResult.onclick = function calArea() {
    var s = (sideST + sideND + sideRD) / 2;
    console.log(s);

    var result = Math.sqrt(s * ((s - sideST) *
        (s - sideND) * (s - sideRD)));
    triArea.innerHTML = result;
}




// //////////////////////////////////////////////////////////////////////////////////////////////////////



// Finding the circumference and surface area of a circle
// c)
var Circum = document.getElementById("circference");
var resCircum = document.getElementById("res");
var Surface = document.getElementById("surfaceArea");
var resSurface = document.getElementById("reslt");
var Radius = document.getElementById("radius");

Circum.onclick = function Circumference() {
    resCircum.innerHTML = 2 * Math.PI * Radius.value;
}

Surface.onclick = function SurfaceArea() {
    resSurface.innerHTML = Math.PI * Math.pow(Radius.value, 2);

}