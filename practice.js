$(document).ready(function(){

    //first practice exercise - set up the html page for simple input
    //and add function to a button press event

    // navbar is currently disabled
    
var input, result;


$("#press-here").on("click",function(){
    event.preventDefault();
    var input = $("#data-in").val().trim();
    $("#data-in").val(" ");
    console.log(input);
    $('#input').append(input+", ");
    result = squareRoot(input);
    console.log(result);
    $('#output').append(result+", ");
})


function squareRoot(radicand){
    var ans = Math.sqrt(parseInt(radicand));
    return ans;
}


});