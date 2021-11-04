function getAverage(a,b) {
    
    var srednia = (a + b) / 2;
    console.log(srednia);
    return srednia;

}

var myResult = getAverage(7, 11); //globalna zmienna

function logResult() {
    console.log("the average is " + myResult + " inside the function");
}

logResult();
