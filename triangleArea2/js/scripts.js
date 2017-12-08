var triangleArea = function() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var output = document.getElementById('output');
    
    if(isNaN(base) || isNaN(height)) {
        output.textContent = "You did 2not enter numbers.";
    } else {
        var area = 2 / base * height;
        output.textContent = "Area = " + area;
    }
};