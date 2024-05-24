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
const back_btn = document.querySelector("#back"); 
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


//2 Major Functions 




//Main Calculation Object

let calculationObject = {
    num1: '' ,
    operator: '' ,  
    num2: '', 
    total: '', 
};
function numberButtonPressed (button){ //Updates object's num1 or num2 property and displays results
    let number = button.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
    }
    console.log(calculationObject);
}

function operatorButtonPressed(button){ // Updates object's operator property (*,/,+,-)
    let operator = button.textContent;
    if (calculationObject.total != ''){ 
        calculationObject.num1 = calculationObject.total; 
        calculationObject.operator = operator; 
        calculationObject.num2 = ''; 
        calculationObject.total = ''; 
    }
    else if(calculationObject.num1 != '' && calculationObject.num2 === ''){
       calculationObject.operator = operator;  
    }
    console.log(calculationObject);
}

// Specific event listeners 

clear_btn.addEventListener("click", () => { 
    calculationObject.num1 = ''; 
    calculationObject.num2 = ''; 
    calculationObject.operator = ''; 
    calculationObject.total = ''; 
    display_text.textContent = calculationObject.num1; 
    console.log(calculationObject);
}); 

back_btn.addEventListener("click", () => { 
    if (calculationObject.num1 != '' && calculationObject.operator === ''){ 
        calculationObject.num1 = calculationObject.num1.slice(0,-1); 
        display_text.textContent = calculationObject.num1; 
    }
    else if (calculationObject.num1 != "" && calculationObject.operator != "" && calculationObject.num2 != "" && calculationObject.total === ""){ 
        calculationObject.num2 = calculationObject.num2.slice(0,-1);
        display_text.textContent = calculationObject.num2; 
    }
    console.log(calculationObject);
})


percentage_btn.addEventListener("click", () => { 
    if (calculationObject.total != ''){ 
        let newNum = (Number(calculationObject.total) / 100).toString(); 
        if (newNum.length > 13){ 
            newNum = (Number(newNum)).toFixed(12);
            calculationObject.num1 = newNum; 
        }
        else { 
            calculationObject.num1 = newNum; 
        }
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.num1 !== "" && calculationObject.operator === ""){ 
        let newNum = (Number(calculationObject.num1) / 100).toString(); 
        if (newNum.length > 13){ 
            newNum = (Number(newNum)).toFixed(12);
            calculationObject.num1 = newNum; 
        }
        else { 
            calculationObject.num1 = newNum; 
        }
        display_text.textContent = calculationObject.num1;
    }
    else if (calculationObject.num1 !== "" && calculationObject.operator !== "" && calculationObject.total === ""){ 
        let newNum = (Number(calculationObject.num2) / 100).toString(); 
        if (newNum.length > 13){ 
            newNum = (Number(newNum)).toFixed(12);
            calculationObject.num2 = newNum; 
        }
        else { 
            calculationObject.num2 = newNum; 
        }
        display_text.textContent = calculationObject.num2;
    }

    console.log(calculationObject);

})
division_btn.addEventListener("click", () => { 
    operatorButtonPressed(division_btn);
})

seven_btn.addEventListener("click", () => { 
    numberButtonPressed(seven_btn); 
})

eight_btn.addEventListener("click", () => { 
    numberButtonPressed(eight_btn); 
})


nine_btn.addEventListener("click", () => { 
    numberButtonPressed(nine_btn); 
})

multiplication_btn.addEventListener("click", () => { 
    operatorButtonPressed(multiplication_btn);
})


four_btn.addEventListener("click", () => { 
    numberButtonPressed(four_btn); 
})


five_btn.addEventListener("click", () => { 
    numberButtonPressed(five_btn); 
})

six_btn.addEventListener("click", () => { 
    numberButtonPressed(six_btn); 
})

subtraction_btn.addEventListener("click", () => { 
    operatorButtonPressed(subtraction_btn);
})

one_btn.addEventListener("click", () => { 
    numberButtonPressed(one_btn); 
})

two_btn.addEventListener("click", () => { 
    numberButtonPressed(two_btn); 
})

three_btn.addEventListener("click", () => { 
    numberButtonPressed(three_btn); 
})


addition_btn.addEventListener("click", () => { 
    operatorButtonPressed(addition_btn);
})

change_sign_btn.addEventListener("click", () => { 

    if (calculationObject.num1 !== "" && calculationObject.num2 === "" && calculationObject.operator === ""){ 
        calculationObject.num1 =(Number(calculationObject.num1) * -1).toString(); 
        display_text.textContent = calculationObject.num1; 
        
    }
    else if (calculationObject.num1 !== "" && calculationObject.num2 !== "" && calculationObject.operator !== "" && calculationObject.total === ""){ 
        calculationObject.num2 =(Number(calculationObject.num2) * -1).toString(); 
        display_text.textContent = calculationObject.num2; 
    }
    else if (calculationObject.total !== ""){ 
        calculationObject.num1 = (Number(calculationObject.total) * -1).toString();
        display_text.textContent = calculationObject.num1; 
        calculationObject.num2 = ""; 
        calculationObject.operator = ""; 
        calculationObject.total = "";
    }
    console.log(calculationObject); 
})

zero_btn.addEventListener("click", () => { 
    numberButtonPressed(zero_btn); 
})

decimal_btn.addEventListener("click", () => { 
    let number = decimal_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === '' && !calculationObject.num1.includes('.')){ 

        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
 
    }
    else if (calculationObject.operator !== '' && !calculationObject.num2.includes('.')){ 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
    }
    console.log(calculationObject);
})

equals_btn.addEventListener("click", () => { 
    if (calculationObject.operator === '/' && calculationObject.num2 === '0'){ 
        display_text.textContent = "undefined"
        calculationObject.num1 = '';
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
        
    }
    else if (calculationObject.num1 != '' && calculationObject.num2 != '' && calculationObject.operator !=''){ 
        calculationObject.total = operate(Number(calculationObject.num1), Number(calculationObject.num2), calculationObject.operator).toString(); 
        if (calculationObject.total.length > 13){ 
            let numTotal = Number(calculationObject.total); 
            numTotal = numTotal.toFixed(12); 
            calculationObject.total = numTotal.toString();
        }
        
        display_text.textContent = calculationObject.total; 
        
    }
    console.log(calculationObject);
})









