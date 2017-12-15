$(document).ready(function(){

var array =[0,3,6,9,12,15,18,21];
var element, index;

$("#array-stuff").on("click",function(){
    event.preventDefault(); 
    $("#array-orig").append(array+"   ");
    $("#array-orig").append('<br>');
    element = ranTriple();
    index = findOne(element,array)
    console.log(index);

    //remove the random number from the array, or nothing if index = -1 (one item at the found index)
    if(index!=-1){
        array.splice(index,1);      //if I listed a third number, it would replace the one spliced out        
    }
    console.log(array)
    $("#array-mod").append(array+"   ");
    $("#array-mod").append('<br>');
    $("#element").append(element+", ");
    $("#index").append(index+", "); 
});

function ranTriple(){
    //generate a random multiple of 3 between 0 and 21
    var triple = Math.floor(Math.random()*8)*3;
    console.log(triple);
    return triple;
}

function findOne(arrElement,many){

    //find and return the index of 'triple' in the array 'many'
    //(if it's already been removed, return '-1')

    var which = many.indexOf(arrElement);
    console.log(which);
    return which;
}

})