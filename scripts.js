let fontSize = 30; 
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
}

function percentage(a){
    return a/100; 
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
let validOperators = ["/", "*", "-", "+"]; 
function display(){
    const calcButtons= document.querySelectorAll("button"); 
    let screen = document.getElementById("display");  
    for(let i = 0; i < calcButtons.length; i++){
        calcButtons[i].addEventListener("click", function(e){
           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator ==""){
             screen.textContent += e.target.innerHTML; 
             toCalculate.firstNumber = Number(screen.textContent);
           }
           if(!Number.isInteger(Number(e.target.innerHTML)) && toCalculate.firstNumber != Number.MAX_SAFE_INTEGER &&  e.target.innerHTML != "=" && toCalculate.operator == ""){
                if(validOperators.includes(e.target.innerHTML)){
                    toCalculate.operator = e.target.innerHTML; 
                }
            }
           if(Number.isInteger(Number(e.target.innerHTML)) && toCalculate.operator !=""){
                if(toCalculate.operator == "+" || toCalculate.operator == "-" || toCalculate.operator == "/" || toCalculate.operator == "*"){
                    if(screen.textContent == toCalculate.firstNumber){
                        screen.textContent = ""; 
                    }
                    screen.textContent += e.target.innerHTML; 
                    toCalculate.secondNumber = Number(screen.textContent);
                }
           }
           if(validOperators.includes(e.target.innerHTML) && toCalculate.secondNumber != Number.MAX_SAFE_INTEGER && toCalculate.firstNumber != Number.MAX_SAFE_INTEGER && toCalculate.operator != "" ){
                screen.textContent = operate(Number(toCalculate.firstNumber), toCalculate.operator, Number(toCalculate.secondNumber)); 
                toCalculate.firstNumber = screen.textContent; 
                toCalculate.secondNumber = Number.MAX_SAFE_INTEGER; 
                toCalculate.operator = e.target.innerHTML; 
           }
           if(toCalculate.secondNumber != Number.MAX_SAFE_INTEGER && e.target.innerHTML=="="){
             screen.textContent = operate(Number(toCalculate.firstNumber), toCalculate.operator, Number(toCalculate.secondNumber)); 
             toCalculate.firstNumber = screen.textContent; 
             toCalculate.secondNumber = Number.MAX_SAFE_INTEGER; 
             toCalculate.operator = ""
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
                else{
                    screen.textContent = negPos(toCalculate.firstNumber); 
                    toCalculate.firstNumber = Number(screen.textContent); 
                }
                break; 
             case "." : 
                if(screen.textContent.includes(".") == false){
                    screen.textContent+= ".";
                }
                if(toCalculate.secondNumber != Number.MAX_SAFE_INTEGER){
                    toCalculate.secondNumber = Number(screen.textContent); 
                }
                else{
                    toCalculate.firstNumber = Number(screen.textContent); 
                }
                break;  
           }
           
        })
    }
}
display(); 