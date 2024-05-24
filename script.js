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
// Defines all the buttons
const clear_btn = document.querySelector("#clear"); 
const percentage_btn = document.querySelector("#percentage"); 
const division_btn = document.querySelector("#division"); 
const seven_btn = document.querySelector("#seven"); 
const eight_btn = document.querySelector("#eight"); 
const nine_btn = document.querySelector("#nine"); 
const multiplication_btn = document.querySelector("#multiplication"); 
const four_btn = document.querySelector("#four"); 
const five_btn = document.querySelector("#five"); 
const six_btn = document.querySelector("#six"); 
const subtraction_btn = document.querySelector("#subtraction"); 
const one_btn = document.querySelector("#one"); 
const two_btn = document.querySelector("#two"); 
const three_btn = document.querySelector("#three"); 
const addition_btn = document.querySelector("#addition"); 
const change_sign_btn = document.querySelector("#change-sign"); 
const zero_btn = document.querySelector("#zero"); 
const decimal_btn = document.querySelector("#decimal"); 
const equals_btn = document.querySelector("#equals"); 
const display_text = document.querySelector(".current-number-displayed"); 
//Main Calculation Object

let calculationObject = {
    num1: '' ,
    operator: '' ,  
    num2: '', 
    total: '', 
};


// Specific event listeners 

clear_btn.addEventListener("click", () => { 
    calculationObject.num1 = ''; 
    calculationObject.num2 = ''; 
    calculationObject.operator = ''; 
    calculationObject.total = ''; 
    display_text.textContent = calculationObject.num1; 
    console.log(calculationObject);
}); 


percentage_btn.addEventListener("click", () => { 
    console.log('hi'); 
})
division_btn.addEventListener("click", () => { 
    console.log('hi');
})

seven_btn.addEventListener("click", () => { 
    console.log('hi');
})

eight_btn.addEventListener("click", () => { 
    //console.log('hi');
    eight = eight_btn.textContent; 
    if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += eight; 
        display_text.textContent = calculationObject.num1; 
        console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += eight; 
        display_text.textContent = calculationObject.num2; 
        console.log(calculationObject); 
        //display content of num2
    }
})
/*

nine_btn.addEventListener("click", () => { 
    
})

multiplication_btn.addEventListener("click", () => { 
    
})


four_btn.addEventListener("click", () => { 
    
})


five_btn.addEventListener("click", () => { 
    
})

six_btn.addEventListener("click", () => { 
    
})

subtraction_btn.addEventListener("click", () => { 
    
})

one_btn.addEventListener("click", () => { 
    
})

two_btn.addEventListener("click", () => { 
    
})

three_btn.addEventListener("click", () => { 
    
})
*/

addition_btn.addEventListener("click", () => { 
    //console.log('hi'); 
    
    if(calculationObject.num1 != ''){
       calculationObject.operator = addition_btn.textContent; 
       console.log(calculationObject);  
    }
    
})

change_sign_btn.addEventListener("click", () => { 
    console.log('hi');
})

zero_btn.addEventListener("click", () => { 
    console.log('hi');
})

decimal_btn.addEventListener("click", () => { 
    console.log('hi');
})

equals_btn.addEventListener("click", () => { 
    if (calculationObject.num1 != '' && calculationObject.num2 != '' && calculationObject.operator !=''){ 
        calculationObject.total = operate(Number(calculationObject.num1), Number(calculationObject.num2), calculationObject.operator).toString(); 
        display_text.textContent = calculationObject.total; 
        console.log(calculationObject); 
    }
})









