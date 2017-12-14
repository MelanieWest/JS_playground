$(document).ready(function(){

    //first practice exercise - set up the html page for simple input
    //and add function to a button press event

    // navbar is currently disabled
    
var input, result;
var array =[0,3,6,9,12,15,18,21];

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

$("#array-stuff").on("click",function(){
    event.preventDefault(); 
    $("#array-orig").append(array+"   ");
    index = findOne(array);
    console.log(index);
    //remove the random number from the array (one item at the found index)
    array.splice(index,1);      //if I listed a third number, it would replace the one spliced out
    console.log(array)
    $("#array-mod").append(array+"   ");
});

function squareRoot(radicand){
    var ans = Math.sqrt(parseInt(radicand));
    return ans;
}

function findOne(many){
    //generate a random multiple of 3 between 0 and 21
    var triple = Math.floor(Math.random()*8)*3;
    console.log(triple);
    //find and return the index of 'triple' in the array 'many'
    var which = many.indexOf(triple);
    console.log(which);
    return which;
}

});