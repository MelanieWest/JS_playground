
$(document).ready(function(){
    
    //window.alert = null;

    //read the value of the button clicked
    //concatenate entered numbers until an operator is clicked

    //next to do:  if parens are selected, create arrays of vars and ops and use order of ops.  
    // conditions:  sequence must be: number-op-number-op- ... -number.
    //              (mult. numbers at one time ok (concat), but only one op at a time)
    //              they must type opening and closing parens   
    //              vars must outnumber ops by 1
    //              can't divide by zero
    //              for now, parentheses (if used) cannot have numbers outside of them
    //              also for now, only one set of parens at a time (for each data value)
    //              order of ops:  exp's, mult&div l to r, add&subt l to r

        var a = []; //for use with parens at first data value
        var b = []; //for use with parens at second data value
        var opx = []; //for use with parens in first value
        var opy = []; //for use with parens in second value
        var xTemp='', newx='', yTemp='', newy='';
        
        var paren = false;
        var opSel = false;
        var eqSel = false;
        var xSt='', ySt='', xInt=0, yInt=0, Result=0;
        var op = '', opVal = '';
    
    
        $(".number").on("click", function() {
          if(paren==true){      //if open parens, prep number-strings for stuffing into arrays for later eval
              if(opSel ==false){    //parenthetical expression will resolve to the first value
                xTemp = $(this).val();
                newx += xTemp;
                $("#first-number").append(newx);
            }
              else{             // parenthetical expression will resolve to second value
                yTemp = $(this).val();
                newy += yTemp;
                $("#second-number").append(newy);
            }
          }

          if(paren == false){     //if no parens are chosen (or they are closed),
            // proceed with a simple number entry (no arrays)
            //note:  insert error handler here to prevent number entry imm. after closed parens

            if (opSel == false) {  // only concat first number (string) if no operator has been pressed
                var x= $(this).val();
                xSt += x;               //string for now;  parse to a number when evaluating
                $("#first-number").html(xSt);
                console.log(xSt);
            }
            else {
                var y= $(this).val();       //concat second number (string) if operator is selected
                ySt += y;               //string for now;  parse to a number when evaluating
                $("#second-number").html(ySt);
                console.log(ySt);
            }                           
          }     //end of false parens block

        });

    
    //display the operator
    
          $(".operator").on("click", function() {

            op= $(this).text();     // use this as the display image
            opVal = $(this).val();    //use the value for decision-making

            if(paren==true){   //this will stuff arrays until parens are closed
                if(newx==''){       //error check  - no number entered before operator
                    alert("You must enter a number first");                    
                }
                else if (opSel==false){  //stuffs arrays that resolve to first value
                   if(newx ==''){
                       alert('you must first enter a number');
                   }
                   else{
                       a.push(newx);    //push the numeric value into the numbers array;
                       opx.push(opVal); //push the operation selected into operators array
                       newx ='';        //reset for next entry
                       $("#first-number").append(newx+op);
                   }
                }
                else if(opSel==true){ //stuffs arrays that resolve to second value
                    if(newy ==''){
                        alert('you must first enter a number');
                    }
                    else{
                        b.push(newy);    //push the numeric value into the numbers array;
                        opy.push(opVal); //push the operation selected into operators array
                        newy ='';        //reset for next entry
                        $("#second-number").append(newy+op);
                    }
                }

            }
            if(paren==false){  // this sets the operation between the two resolved values
                if(xSt=''){     //if the first value doesn't exist
                    alert("You must enter a number first");                    
                }
                else{           // if the first value does exist
                    $("#operator").html("<h1>"+ op +" </h1> ");     //display the operator (text)
                    opSel = true;       //this tells calc that entries after this apply to second value        
                }
            }

          });

    $(".grouping").on("click",function(){

        p= $(this).text();          //image for display
        pVal = $(this).val();       //value for decision-making
        if(pVal=="left-paren"){     //begin a sequence of operations in parens
            paren = true;
            if(opSel==false){
                $("#first-number").append('(');                
            }
            else{
                $("#second-number").append('(');                
            }
            
        }
        else{                   //end the sequence of operations
            paren = false;
            if(opSel==false){
                $("#first-number").append(')');                
            }
            else{
                $("#second-number").append(')');                
            }

        }
        alert('you chose '+p+', and boolean for parens is now '+paren);
    })
    
    //execute the operations when 'equal' is pressed;
    //interpret the operations from the 'value' attribute
    $(".equal").on("click", function(){

        eqSel = true;

        xInt = parseInt(xSt);   //first value entered
        $("#xVal").html("<h1>"+xInt+"</h1>");
        $("#opEcho").html("<h1>"+ op +" </h1> ");  
        yInt = parseInt(ySt);   //second value entered
        $("#yVal").html('<h1>'+yInt+'</h1>');
        
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
                    pareb = false;
                    opSel = false;
                    eqSel = false;
                    $("#first-number, #second-number, #operator, #result,#xVal,#yVal,#opEcho",).html("");
    });

    document.addEventListener("keydown",keydownHandler,false);

    function keydownHandler(e) {   //key codes:  13= enter, 32=space bar - these two both cause a 'NaN' display
            if (eqSel) {  
               clear();
            }
    }

    function clear(){
        xSt = ySt = "";
        paren = false;
        opSel = false;
        eqSel = false;
        $("#first-number, #second-number, #operator, #result,#xVal,#yVal,#opEcho").html(""); 
    }
    
    });     //end of document ready function
    