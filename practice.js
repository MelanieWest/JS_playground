$(document).ready(function () {

    //first practice exercise - set up the html page for simple input
    //and add function to a button press event

    var input, result;


    $("#press-here").on("click", function () {
        event.preventDefault();
        var num = $("#num").val().trim();
        $("#num").val(" ");
        var denom = $("#denom").val().trim();
        $("#denom").val(" ");
        var radicand = $("#rad").val().trim();
        $("#rad").val(" ");
        var input = "solve " + radicand + " ^ (" + num + " / " + denom + ")";
        $('#input').append(input + ", ");
        $('#input').append("<br>");
        result = fractRoot(radicand, num, denom);
        console.log(result);
        $('#output').append(result + ", ");
        $('#output').append("<br>");
    })


    function fractRoot(rad, n, d) {
        //var ans = rad**(n/d);
        var ans = Math.pow(rad, (n / d));
        return ans;
    }


    for(var i=0;i<10;i++){
        console.log("i ="+i);
    }

});