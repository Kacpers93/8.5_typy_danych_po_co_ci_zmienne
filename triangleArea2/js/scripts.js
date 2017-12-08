//var triangleArea;
//var a = prompt('Type triangle\'s base:');
//var h = prompt('Type triangle\'s height:');
//
//triangleArea = a*h/2;
//
//alert('triangle area is:' + triangleArea);
//
//console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);



var triangleArea = function() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var output = document.getElementById('output');
    
    if(isNaN(base) || isNaN(height)) {
        output.textContent = "You did not enter numbers.";
    } else {
        var area = 2 / base * height;
        output.textContent = "Area = " + area;
    }
};