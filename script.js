//console.log('hello there'); 

function add(num1, num2){ 
    return num1 + num2; 
}

function subtract(num1, num2){ 
    return num1 - num2; 
}

function multiply(num1, num2){ 
    return num1 * num2;
}

function divide(num1, num2){ 
    return num1 / num2; 
}

function getRemainder(num1, num2){ 
    return num1 % num2; 
}


function operate(num1, num2, operator){ 
    switch(operator){ 
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1, num2);
        case '/': 
            return divide(num1, num2); 
        case '*': 
            return multiply(num1, num2); 
        case '%': 
            return getRemainder(num1, num2); 
    };
}; 

console.log(operate(1, 3, '+')); 
console.log(operate(1, 3, '-')); 
console.log(operate(1, 3, '*'));
console.log(operate(1, 3, '/')); 
console.log(operate(1, 3, '%'));  


