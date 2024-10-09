
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

function calculate(){
    let expression = []; 
    const calcButtons = document.querySelectorAll("button"); 
    for(let i = 0; i < calcButtons.length; i++){
        calcButtons[i].addEventListener("click", function(e){
            
            expression.push(e.target.innerHTML); 

        }); 
    }
}

