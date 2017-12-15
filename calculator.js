
$(document).ready(function(){
    
    // Your code here...
    
    //read the value of the button clicked
    //concatenate entered numbers until an operator is clicked
    
        var opSel = false;
        var eqSel = false;
        var xSt='', ySt='', xInt=0, yInt=0, Result=0;
        var op = '', opVal = '';
    
    
            $(".number").on("click", function() {
            if (opSel == false) {  // only append first number if no operator has been pressed
                var x= $(this).val();
                xSt += x;
                $("#first-number").html(xSt);
                console.log(xSt);
            }
            else {
                var y= $(this).val();
                ySt += y;
                $("#second-number").html(ySt);
                console.log(ySt);
            }
          });
    
    
    //display the operator
    
          $(".operator").on("click", function() {
            op= $(this).text();
            opVal = $(this).val();
            console.log(opVal);
            $("#operator").html("<h1>"+ op +" </h1> ");
            opSel = true;
     //       console.log(op)
          });
    
    //execute the operations when 'equal' is pressed;
    //interpret the operations from the 'value' attribute
    $(".equal").on("click", function(){
        xInt = parseInt(xSt);
        yInt = parseInt(ySt);
    
    if (opVal == "plus"){
        Result= xInt + yInt;
        $('#result').html('<h1>'+Result+'</h1>');
    }
    if (opVal == 'minus'){
        Result = xInt - yInt;
        $('#result').html('<h1>'+Result+'<h1>');
    }
    if (opVal == 'times'){
        Result = xInt * yInt;
        $('#result').html('<h1>'+Result+'<h1>');  
    }
    if (opVal == 'divide'){
        Result = xInt / yInt;
        $('#result').html('<h1>'+Result+'<h1>');  
    }
    if (opVal == 'power'){
        Result = xInt ** yInt;
        $('#result').html('<h1>' +Result +' <h1>');  
    }
        
    });     //end of 'equal' function
    
    
    $(".clear").on('click', function() {
                    xSt = ySt = "";
                    opSel = false;
                    eqSel = false;
                    $("#first-number, #second-number, #operator, #result").html("");
    });
    
    });     //end of document ready function
    