$(document).ready(function(){

var array =[0,3,6,9,12,15,18,21];
var element, index;

// Create a placeHolder array to avoid modifying the original.
//the 'slice' method is a good way to copy an array (You can't just use '=' to copy an array)
// 'slice' will slice out array elements between selected indices, as shown below:

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
    element = parseFloat(element);          // convert to numbers (negative numbers were being read as strings)
    $("#element-in").val(" ");
    var length = placeHolder.push(element);     //the push method puts a new element at the end and returns the new length of the array
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
    element = parseFloat(element);          // convert to a number (negative numbers were being read as strings)
    $("#element-in").val(" ");
    var length = placeHolder.unshift(element);     //the unshift method puts a new value in front and returns the new length of the array
    $("#element-out").append(" new length = "+ length+", ");   
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#filter").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.filter(isEven);      //filters out (keeps) elements according to the given condition (function)
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#sortd").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    placeHolder.sort(desc);       //'sort' will sort strings (alpha);  with numbers, a compare function is needed.  This sorts descending.
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#sorta").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    placeHolder.sort(asc);       //'sort' will sort strings (best for alpha);  with numbers, a compare function is needed.  This sorts ascending.
    $("#array-mod").append(placeHolder+"   ");
    $("#array-mod").append('<br>');
});

$("#map").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.map(aThird);     //'map' applies the requested function to each array element
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#join").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var newArray = placeHolder.join("");        //join makes the array a single string.  It defaults to comma separation unless the join character is specified in parens.
    $("#array-mod").append(newArray+"   ");
    $("#array-mod").append('<br>');
});

$("#reduce").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(placeHolder+"   ");
    $("#array-orig").append('<br>');
    var total = placeHolder.reduce(sum);            //reduce the array to a using the 'sum' function (take care to convert new elements to numbers)
    )
    var len = placeHolder.length
    var average = total/len;       //use array length to solve the average
    $("#array-mod").append(average +"   ");
    $("#array-mod").append('<br>');
});

$("#foreach").on("click",function(){
    event.preventDefault();
    $("#array-orig").append(" see console  ");
    $("#array-orig").append('<br>');
    placeHolder.forEach(arrayLog);          //apply the 'arrayLog' function to each array element
    $("#array-mod").append("   ");
    $("#array-mod").append('<br>');
});

function ranTriple(){
    //generate a random multiple of 3 between 0 and 21
    var triple = Math.floor(Math.random()*8)*3;
    console.log('random mult of 3: '+triple);
    return triple;
}

function findOne(arrElement,many){

    //find and return the index of 'arrElement' in the array 'many'
    //(if it's already been removed, return '-1')

    var which = many.indexOf(arrElement);
    console.log('index of element: '+ which);
    return which;
}

function isEven(a){
    return a%2==0;          // 'filter' is used to filter out the even numbers
}

function aThird(a){
    return a/3;             // each array element is 'mapped' to this function and divided by 3
}

function sum(tot, ele){
    ele = parseInt(ele);
    console.log('total = '+tot);   
    return tot + ele;         //in this case, 'reduce' uses this summing function to reduce to a sum (recursively adds to 'tot')
}

function arrayLog(item,index){      //use this to format console logging of array elements, used in 'forEach'
  console.log("index[" + index + "]: " + item);
}

function desc(a,b){
    return b-a;     //this will return positive when array is sorted in descending order
}

function asc(a,b){
    return a-b;     //this will return positive when array is sorted in descending order
}


})