
$(document).ready(function(){
    
    //read the value of the button clicked
    //concatenate entered numbers until an operator is clicked

    //next to do:  if parens are selected, create arrays of vars and ops and use order of ops.  
    // conditions:  sequence must be: number-op-number-op- ... -number.
    //              they must type opening and closing parens (make auto?-keep cursor inside...)  
    //              vars must outnumber ops by 1
    //              can't divide by zero
    //              for now, parentheses (if used) cannot have numbers outside of them
    //              also for now, only one set of parens at a time (for each data value)
    //              order of ops:  exp's, mult&div l to r, add&subt l to r

        var x = []; //for use with parens at first data value
        var y = []; //for use with parens at second data value
        var opx = []; //for use with parens in first value
        var opy = []; //for use with parens in second value
        
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

        eqSel = true;

        xInt = parseInt(xSt);   //first value entered
        yInt = parseInt(ySt);   //second value entered

    switch (opVal){             //operation selected
        case("plus"):
            Result= xInt + yInt;
            break;
        case("minus"):
            Result = xInt - yInt;
            break;
        case("times"):
            Result = xInt * yInt;
            break;
        case("divide"):
            Result = xInt / yInt;
            break;
        case("power"):
            Result = xInt ** yInt;
            break;
        default:
            Result = 0;
            break;               
    }

    $('#result').html('<h1>' +Result +' <h1>');  
    
    });     //end of 'equal' function
    
    
    $(".clear").on('click', function() {
                    xSt = ySt = "";
                    opSel = false;
                    eqSel = false;
                    $("#first-number, #second-number, #operator, #result").html("");
    });

    document.addEventListener("keydown",keydownHandler,false);

    function keydownHandler(e) {   //key codes:  13= enter, 32=space bar - these two both cause a 'NaN' display
            if (eqSel) {  
               clear();
            }
    }

    function clear(){
        xSt = ySt = "";
        opSel = false;
        eqSel = false;
        $("#first-number, #second-number, #operator, #result").html(""); 
    }
    
    });     //end of document ready function
    