var equals = new Boolean();
var operandPresence = new Boolean();
var expressionCalc = new Boolean();

equals = false;
operandPresence = false;
expressionCalc = false;

function operCalc(clicked_id){
    var idClickedButton = String(clicked_id);
    var valueExpressionField = String(document.getElementById("expression").value);

    if(equals){
        alert("Enter a number");
    }
    else{
        equals = false;
        if(valueExpressionField == ""){
            if(idClickedButton == "+" || idClickedButton == "-" ||
            idClickedButton == "*" || idClickedButton == "/"){
                alert("Enter Number First");
            }
        }
        else{
            if(valueExpressionField.charAt(valueExpressionField.length-1)
            == "+" || valueExpressionField.charAt(valueExpressionField.length-1)
            == "-" || valueExpressionField.charAt(valueExpressionField.length-1)
            == "*" || valueExpressionField.charAt(valueExpressionField.length-1)
            == "/"){
               alert("Cannot have two consecutive operands");
           }
           else{
                if(!operandPresence){
                    document.getElementById("expression").value = 
                    valueExpressionField + idClickedButton;
                    operandPresence = true;
                }
                else{
                    var firstNumber = new String(); 
                    var secondNumber = new String();
                    var operand = new String()
                    
                    if(!expressionCalc){
                        var i = 0;
                        while(valueExpressionField.charAt(i) != "+" &&
                        valueExpressionField.charAt(i) != "-" &&
                        valueExpressionField.charAt(i) != "*" &&
                        valueExpressionField.charAt(i) != "/" ){
                            firstNumber = firstNumber + valueExpressionField.charAt(i);
                            i++;
                        }
                        operand = valueExpressionField.charAt(i);
                        i++;
                        while(i != valueExpressionField.length){
                            secondNumber = secondNumber + valueExpressionField.charAt(i);
                            i++;
                        }
                        expressionCalc = true;
                    }
                    else{
                        firstNumber = String(document.getElementById("result").value);
                        var i = valueExpressionField.length-1;
                        while(valueExpressionField.charAt(i)!="+" && 
                        valueExpressionField.charAt(i)!="-" &&
                        valueExpressionField.charAt(i)!="*" &&
                        valueExpressionField.charAt(i)!="/"){
                            secondNumber = secondNumber + 
                            valueExpressionField.charAt(i);
                            i--;
                        }
                        operand = valueExpressionField.charAt(i);
                    }
                    var integerOne = parseFloat(firstNumber, 10);
                    var integerTwo = parseFloat(secondNumber, 10);
                    var resultOper;
                    if(operand == "+"){
                        resultOper = integerOne + integerTwo;
                    }
                    else if(operand == "-"){
                        resultOper = integerOne - integerTwo;
                    }
                    else if(operand == "*"){
                        resultOper = integerOne * integerTwo;
                    }
                    else if(operand == "/"){
                        resultOper = integerOne / integerTwo;
                    }
                    document.getElementById("expression").value = 
                    valueExpressionField + idClickedButton;
                    document.getElementById("result").value = String(resultOper);
                }
            }
        }
    }

    
}

function backCalc(clicked_id){
    var idClickedButton = String(clicked_id);
    var valueExpressionField = String(document.getElementById("expression").value);

    if(equals){
        document.getElementById("expression").value = "";
        document.getElementById("result").value = "0"; 
        document.getElementById("expression").value = idClickedButton; 
        equals = false;
    }
    else{
        document.getElementById("expression").value = 
           valueExpressionField + idClickedButton;
    }
}

function performCalc(clicked_id){
    var idClickedButton = String(clicked_id);
    var valueExpressionField = String(document.getElementById("expression").value);

    if(operandPresence){
        if(valueExpressionField == ""){
            alert("Enter Number First");
        }
        else{
            equals = true;
            var firstNumber = new String(); 
            var secondNumber = new String();
            if(!expressionCalc){
                var i = 0;
                while(valueExpressionField.charAt(i) != "+" &&
                valueExpressionField.charAt(i) != "-" &&
                valueExpressionField.charAt(i) != "*" &&
                valueExpressionField.charAt(i) != "/" ){
                    firstNumber = firstNumber + valueExpressionField.charAt(i);
                    i++;
                }
                var operand = new String()
                operand = valueExpressionField.charAt(i);
                i++;
                while(i != valueExpressionField.length){
                    secondNumber = secondNumber + valueExpressionField.charAt(i);
                    i++;
                }
            }
            else{
                firstNumber = String(document.getElementById("result").value);
                var i = valueExpressionField.length-1;
                while(valueExpressionField.charAt(i)!="+" && 
                valueExpressionField.charAt(i)!="-" &&
                valueExpressionField.charAt(i)!="*" &&
                valueExpressionField.charAt(i)!="/"){
                    secondNumber = secondNumber + 
                    valueExpressionField.charAt(i);
                    i--;
                }
                var operand = new String()
                operand = valueExpressionField.charAt(i);
            }
            if(secondNumber.length == 0){
                alert("Enter Second Number");
            }
            else{
                var integerOne = parseFloat(firstNumber, 10);
                var integerTwo = parseFloat(secondNumber, 10);
                var resultOper;
                if(operand == "+"){
                    resultOper = integerOne + integerTwo;
                }
                else if(operand == "-"){
                    resultOper = integerOne - integerTwo;
                }
                else if(operand == "*"){
                    resultOper = integerOne * integerTwo;
                }
                else if(operand == "/"){
                    resultOper = integerOne / integerTwo;
                }
                document.getElementById("result").value = 
                resultOper;
                equals = true;
                operandPresence = false;
                expressionCalc = false;
            }
            
        }
    }
}

function clearCalc(clicked_id){
    var idClickedButton = String(clicked_id);
    if(idClickedButton == "C"){
        var valueExpressionField = String(document.getElementById("expression").value);
        if(equals){
            reset_fields();
        }
        else if(valueExpressionField.length == 0){
        }
        else{
            if(valueExpressionField.charAt(
                valueExpressionField.length-1
            ) == "+" ||
            valueExpressionField.charAt(
                valueExpressionField.length-1
            ) == "-" ||
            valueExpressionField.charAt(
                valueExpressionField.length-1
            ) == "*" ||
            valueExpressionField.charAt(
                valueExpressionField.length-1
            ) == "/"){
                valueExpressionField =  valueExpressionField.slice(0, valueExpressionField.length-1);
                document.getElementById("expression").value = valueExpressionField;
                operandPresence = false;
            }
            else{
                valueExpressionField =  valueExpressionField.slice(0, valueExpressionField.length-1);
                document.getElementById("expression").value = valueExpressionField;
            }
        }
        
    }
    else if(idClickedButton == "CE"){
        reset_fields();
        reset_boolean();
    }
}

function reset_fields(){
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "0";
}

function reset_boolean(){
    equals = false;
    operandPresence = false;
    expressionCalc = false;
}
