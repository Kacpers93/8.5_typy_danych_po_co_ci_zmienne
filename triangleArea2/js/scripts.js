






var a = document.getElementById('base');
var h = document.getElementById('height');
var output = document.getElementById('output');


function triangleArea () {
    var base = parseFloat(a .value);
    var height = parseFloat(h .value);
    
    
//    BEFORE:
//    var base = parseFloat(document.getElementById('base').value);
//    var height = parseFloat(document.getElementById('height').value);
//    var output = document.getElementById('output');

    if (isNaN(base) || isNaN(height)) {
        output.textContent = "You did not enter numbers.";
    } else {
        var area = 2 / base * height;
        output.textContent = "Area = " + area;
    }
};