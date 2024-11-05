const toCalculate = {
    firstNumber: 0, 
    firstNumberType: "positive",
    secondNumber: 0, 
    secondNumberType: "negative", 
    operator: "", 
};

function add(a,b){
    return a+b; 
}

function subtract(a,b){
    return a-b; 
}

function multiply(a,b){
    return a*b; 
}

function divide(a,b){
    return a/b; 
}

function percentage(a){
    return a/100; 
}

function negPos(a){
    if(toCalculate.firstNumberType = "positive"){
        toCalculate.firstNumberType = "negative"; 
        return -a; 
    }
    else{
        toCalculate.firstNumberType = "positive"; 
        return a; 
       
    }
}

function clear(){
    let screen = document.getElementById("display"); 
    screen.textContent = "";
    toCalculate.firstNumber = 0;  
}

function calculate(){
    const calcButtons = document.querySelectorAll("button"); 
    let screen = document.getElementById("display"); 
    screen.textContent = toCalculate.firstNumber; 
    for(let i = 0; i < calcButtons.length; i++){
        calcButtons[i].addEventListener("click", function(e){

           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator ==""){
                if(toCalculate.firstNumber == 0){
                    clear(); 
                }
             screen.textContent += e.target.innerHTML; 
             toCalculate.firstNumber = screen.textContent;
           }

           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator !=""){
                if(toCalculate.operator == "+" || toCalculate.operator == "-" || toCalculate.operator == "/" || toCalculate.operator == "*"){
                    if(screen.textContent == toCalculate.firstNumber){
                        screen.textContent = ""; 
                    }
                    screen.textContent += e.target.innerHTML; 
                    toCalculate.secondNumber = screen.textContent;
                }
           }

           switch(e.target.innerHTML){
                case "AC":
                    clear();
                    break; 
                case "%":
                    screen.textContent = percentage(toCalculate.firstNumber); 
                    firstNumber = screen.textContent; 
                    break; 
                case "+/-":
                    screen.textContent = negPos(toCalculate.firstNumber); 
                    toCalculate.firstNumber = screen.textContent; 
                    break; 
                case "+" : 
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "+"){
                        screen.textContent = add(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "-"){
                        screen.textContent = subtract(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "/"){
                        screen.textContent = divide(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    toCalculate.operator = "+";
                    break; 
                case "-": 
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "+"){
                        screen.textContent = add(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "-"){
                        screen.textContent = subtract(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "/"){
                        screen.textContent = divide(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    toCalculate.operator = "-"; 
                    break; 
                case "/":
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "+"){
                        screen.textContent = add(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "-"){
                        screen.textContent = subtract(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "/"){
                        screen.textContent = divide(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    toCalculate.operator = "/";
                    break;  
                case "*": 
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "+"){
                        screen.textContent = add(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "-"){
                        screen.textContent = subtract(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "/"){
                        screen.textContent = divide(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "*"){
                        screen.textContent = multiply(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    toCalculate.operator = "*"; 
                    break; 
                case "=" : 
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "+"){
                        screen.textContent = add(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "-"){
                        screen.textContent = subtract(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    if(toCalculate.secondNumber != 0 && toCalculate.operator == "/"){
                        screen.textContent = divide(Number(toCalculate.firstNumber), Number(toCalculate.secondNumber)); 
                        toCalculate.firstNumber = screen.textContent; 
                        toCalculate.secondNumber = 0; 
                        toCalculate.operator = ""; 
                    }
                    toCalculate.operator = "="; 
                    break; 
                case "." : 
                    screen.textContent+= ".";
                    break;        
           } 
        }); 
    }
}

calculate(); 


