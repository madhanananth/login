var inputElement = document.getElementById('input');
var resultElement = document.getElementById('result');


function table() {
    resultElement.innerHTML= "";
    var value = parseInt(inputElement.value);
    var count = 1;
    

        while ( value >= count) {
            var multi = count*13
            resultElement.innerHTML +=   count +  " X 13 =" + multi +"<br>";
            count = count + 1;
        }
    
    inputElement.value = "";
}