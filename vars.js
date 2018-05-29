$(document).ready(function () {
    

    
        var dataArray = [3.14,"3.14",0,true,false,"","Mom",Math,[1,2,3],function(){},[],null,Symbol('?'),Math];
        var data, verity;

        //right now, everything returns as a string.
    

        $("#check").on("click", function () {
            event.preventDefault();
            //var data = $("#data").val().trim();
            //$("#data").val(" ");
            for (var i = 0; i<dataArray.length; i++){
                data = dataArray[i];
                $("#var").append(data + ", ");
                $("#var").append("<br>");
                result = typeof(data);
                console.log(data);
                $('#isType').append(result + ", ");
                $('#isType').append("<br>");
                verity = Boolean(data);
                $("#bool").append(verity + ", ");
                $("#bool").append("<br>");
          }
 
        })
    
        //this was added to log the properties of a string object.  Haven't tested it yet.
        console.log(Object.getOwnPropertyNames(String.prototype));

        function logic(A,B,op) {
            // ans = A op B;
            return ans;
        }
    
    
    });