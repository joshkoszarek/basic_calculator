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
    if (calculationObject.total != ''){ 
        calculationObject.num1 = calculationObject.total; 
        calculationObject.operator = division_btn.textContent; 
        calculationObject.num2 = ''; 
        calculationObject.total = ''; 
        //console.log(calculationObject);
    }
    else if(calculationObject.num1 != '' && calculationObject.num2 === ''){
       calculationObject.operator = division_btn.textContent; 
       //console.log(calculationObject);  
    }
    console.log(calculationObject);
})

seven_btn.addEventListener("click", () => { 
    let number = seven_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

eight_btn.addEventListener("click", () => { 
    //console.log('hi');
    let number = eight_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})


nine_btn.addEventListener("click", () => { 
    let number = nine_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

multiplication_btn.addEventListener("click", () => { 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = calculationObject.total; 
        calculationObject.operator = multiplication_btn.textContent; 
        calculationObject.num2 = ''; 
        calculationObject.total = ''; 
        //console.log(calculationObject);
    }
    else if(calculationObject.num1 != '' && calculationObject.num2 === ''){
       calculationObject.operator = multiplication_btn.textContent; 
       //console.log(calculationObject);  
    }
    console.log(calculationObject);
})


four_btn.addEventListener("click", () => { 
    let number = four_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})


five_btn.addEventListener("click", () => { 
    let number = five_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

six_btn.addEventListener("click", () => { 
    let number = six_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

subtraction_btn.addEventListener("click", () => { 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = calculationObject.total; 
        calculationObject.operator = subtraction_btn.textContent; 
        calculationObject.num2 = ''; 
        calculationObject.total = ''; 
        //console.log(calculationObject);
    }
    else if(calculationObject.num1 != ''&& calculationObject.num2 === ''){
       calculationObject.operator = subtraction_btn.textContent; 
       //console.log(calculationObject);  
    }
    console.log(calculationObject);
})

one_btn.addEventListener("click", () => { 
    let number = one_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

two_btn.addEventListener("click", () => { 
    let number = two_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})

three_btn.addEventListener("click", () => { 
    let number = three_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
})


addition_btn.addEventListener("click", () => { 
    //console.log('hi'); 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = calculationObject.total; 
        calculationObject.operator = addition_btn.textContent; 
        calculationObject.num2 = ''; 
        calculationObject.total = ''; 
        //console.log(calculationObject);
    }
    else if(calculationObject.num1 != '' && calculationObject.num2 === ''){
       calculationObject.operator = addition_btn.textContent; 
       //console.log(calculationObject);  
    }
    console.log(calculationObject);
    
})

change_sign_btn.addEventListener("click", () => { 

   //console.log(calculationObject);
    if (calculationObject.num1 !== "" && calculationObject.num2 === "" && calculationObject.operator === ""){ 
        //console.log(Number(calculationObject.num1));
        //let newNum = Number(calculationObject.num1) * -1; 
        //console.log(`newNum = ${newNum}`); 
        //console.log(`type of newNum = ${typeof newNum}`); 

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
    let number = zero_btn.textContent; 
    if (calculationObject.total != ''){ 
        calculationObject.num1 = number; 
        display_text.textContent = calculationObject.num1;
        calculationObject.num2 = ''; 
        calculationObject.operator = '';
        calculationObject.total = ''; 
    
    }
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
    }
    console.log(calculationObject);
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
    else if (calculationObject.operator === ''){ 
        //console.log('got here');
        calculationObject.num1 += number; 
        display_text.textContent = calculationObject.num1; 
        //console.log(calculationObject); 
    }
    else { 
        calculationObject.num2 += number; 
        display_text.textContent = calculationObject.num2; 
        //console.log(calculationObject); 
        //display content of num2
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
        console.log(calculationObject);
    }
    else if (calculationObject.num1 != '' && calculationObject.num2 != '' && calculationObject.operator !=''){ 
        calculationObject.total = operate(Number(calculationObject.num1), Number(calculationObject.num2), calculationObject.operator).toString(); 
        if (calculationObject.total.length > 13){ 
            let numTotal = Number(calculationObject.total); 
            numTotal = numTotal.toFixed(12); 
            calculationObject.total = numTotal.toString();
        }
        
        display_text.textContent = calculationObject.total; 
        console.log(calculationObject); 
    }
})









