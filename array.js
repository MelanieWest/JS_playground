$(document).ready(function(){

var array =[0,3,6,9,12,15,18,21];
var element, index;

//best practices are not used here.  I modify the original array instead of saving the values.

var placeHolder = array.slice(0,8);    //this avoids modifying the original array
console.log('placeHolder: '+placeHolder);

$("#splice").on("click",function(){
    event.preventDefault(); 
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    element = ranTriple();
    index = findOne(element,placeHolder)
    console.log(index);

    //remove the random number from the array, or nothing if index = -1 (one item at the found index)
    if(index!=-1){
        placeHolder.splice(index,1);      //if I listed a third number, it would replace the one spliced out        
    }
    console.log(array)
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
    $("#element-out").append(element+", ");
    $("#index-out").append(index+", "); 
});

$("#push").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var element = $("#element-in").val().trim();
    $("#element-in").val(" ");
    var length = placeHolder.push(element);     //the push method returns the new length of the array
    $("#element-out").append(" new length = "+ length+", ");   
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#pop").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var end = placeHolder.pop();        //the pop method returns the element removed (last element)
    $("#element-out").append(end+", "); 
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#shift").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var first = placeHolder.shift();        //the shift method returns the element removed (first element)
    $("#element-out").append(first+", "); 
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#unshift").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var element = $("#element-in").val().trim();
    $("#element-in").val(" ");
    var length = placeHolder.unshift(element);     //the unshift method returns the new length of the array
    $("#element-out").append(" new length = "+ length+", ");   
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#filter").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.filter(isEven);
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#map").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.map(aThird);
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#join").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.join("");
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#reduce").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var total = placeHolder.reduce(sum);
    var average = total/(placeHolder.length);
    $("#array-mod").append(average +"   ");
    $("#array-mod").append('<br>');
});

$("#foreach").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(" see console  ");
    $("#array-orig").append('<br>');
    placeHolder.forEach(arrayLog);
    $("#array-mod").append("   ");
    $("#array-mod").append('<br>');
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

function isEven(a){
    return a%2==0;
}

function aThird(a){
    return a/3;
}

function sum(total, element){
    return total + element;
}

function arrayLog(item,index){
  console.log("index[" + index + "]: " + item);
}

})