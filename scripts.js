let fontSize = 30; 
let screenStr = "";
const toCalculate = {
    firstNumber: Number.MAX_SAFE_INTEGER, 
    firstNumberType: "positive",
    secondNumber: Number.MAX_SAFE_INTEGER, 
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
    if(b != 0){
        return a/b; 
    }
    return  Number.NEGATIVE_INFINITY;
}

function percentage(a){
    return round(a/100); 
}

function negPos(a){
    if(toCalculate.firstNumberType == "positive"){
        toCalculate.firstNumberType = "negative"; 
        return -a; 
    }
    else{
        toCalculate.firstNumberType = "positive"; 
        return a; 
       
    }
}
function isOverflow(display) {
    return display.scrollWidth > display.clientWidth;
}
  
function clear(){
    let screen = document.getElementById("display"); 
    screen.textContent = "";
    screenStr= "";
    toCalculate.firstNumber = Number.MAX_SAFE_INTEGER;
    toCalculate.operator ="";   
}
function operate(firstNum, operator, secondNum){
  let result = 0; 
  switch(operator){
    case "+":
        result = add(firstNum,secondNum); 
        break; 
    case "-":
        result = subtract(firstNum, secondNum); 
        break; 
    case "*":
        result = multiply(firstNum,secondNum); 
        break; 
    case "/": 
        result = divide(firstNum,secondNum); 
        break; 
  }
  return result; 
}

function round(num){
    let strNum = num.toString(); 
    let index = strNum.indexOf("."); 
    if(index != -1){
        if(strNum.substring(index).length > 5){
            return num.toPrecision(5); 
        }
    }
    return num; 

}
function truncate(text){ 
    let truncated = text; 
    let decimalIndex = text.indexOf(".");
    if(decimalIndex == -1){
        if(truncated.length > 5){
            truncated = truncated.slice(0,5); 
        }
    }
    else{
        if(text.substring(decimalIndex).length <= 2){
            truncated = text; 
        }
        else{
            if(text.substring(decimalIndex).length > 5){
                truncated = text.slice(0,decimalIndex+5);
            }
        }
    }
    return truncated; 
}
function adjustZero(input){
    if(input ==  Number.NEGATIVE_INFINITY){
        return "Clear & Try Again";
    }
    return input; 
}
let validOperators = ["/", "*", "-", "+"]; 
function display(){
    const calcButtons= document.querySelectorAll("button"); 
    let screen = document.getElementById("display");  
    for(let i = 0; i < calcButtons.length; i++){
        calcButtons[i].addEventListener("click", function(e){
           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator ==""){
             screenStr += e.target.innerHTML; 
             screen.textContent = truncate(screenStr);
             toCalculate.firstNumber = Number(screen.textContent);
           }
           if(!Number.isInteger(Number(e.target.innerHTML)) && toCalculate.firstNumber != Number.MAX_SAFE_INTEGER &&  e.target.innerHTML != "=" && toCalculate.operator == ""){
                if(validOperators.includes(e.target.innerHTML)){
                    screenStr = "";
                    toCalculate.operator = e.target.innerHTML; 
                }
            }
           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator !=""){
                if(toCalculate.operator == "+" || toCalculate.operator == "-" || toCalculate.operator == "/" || toCalculate.operator == "*"){
                    if(screen.textContent == toCalculate.firstNumber){
                        screen.textContent = ""; 
                        screenStr = ""; 
                    }
                    screenStr += e.target.innerHTML; 
                    screen.textContent = truncate(screenStr);
                    toCalculate.secondNumber = Number(screen.textContent);
                }
           }
           if(validOperators.includes(e.target.innerHTML) && toCalculate.secondNumber != Number.MAX_SAFE_INTEGER && toCalculate.firstNumber != Number.MAX_SAFE_INTEGER && toCalculate.operator != "" ){
                screen.textContent = adjustZero(round(operate(Number(toCalculate.firstNumber), toCalculate.operator, Number(toCalculate.secondNumber)))); 
                screenStr = screen.textContent;
                toCalculate.firstNumber = screenStr; 
                toCalculate.secondNumber = Number.MAX_SAFE_INTEGER; 
                toCalculate.operator = e.target.innerHTML; 
           }
           if(toCalculate.secondNumber != Number.MAX_SAFE_INTEGER && e.target.innerHTML=="="){
             screen.textContent = adjustZero(round(operate(Number(toCalculate.firstNumber), toCalculate.operator, Number(toCalculate.secondNumber)))); 
             screenStr = screen.textContent; 
             toCalculate.firstNumber = screenStr; 
             toCalculate.secondNumber = Number.MAX_SAFE_INTEGER; 
             toCalculate.operator = "";
           }
           switch(e.target.innerHTML){
            case "AC":
                clear();
                break; 
            case "%":
                if(toCalculate.secondNumber != Number.MAX_SAFE_INTEGER){
                    screen.textContent = percentage(toCalculate.secondNumber); 
                    toCalculate.secondNumber = Number(screen.textContent);
                }
                else{
                    screen.textContent = percentage(toCalculate.firstNumber); 
                    toCalculate.firstNumber = Number(screen.textContent); 
                }
                break; 
            case "+/-":
                if(toCalculate.secondNumber != Number.MAX_SAFE_INTEGER){
                    screen.textContent = negPos(toCalculate.secondNumber); 
                    toCalculate.secondNumber = Number(screen.textContent); 
                }
                else if(toCalculate.firstNumber != Number.MAX_SAFE_INTEGER){
                    screen.textContent = negPos(toCalculate.firstNumber); 
                    toCalculate.firstNumber = Number(screen.textContent); 
                }
                break; 
             case "." : 
                if(screen.textContent.includes(".") == false){
                    screenStr += ".";
                    screen.textContent = screenStr;
                }
                break;  
           }
           
        })
    }
}
display(); 