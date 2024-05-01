

 add = function (num1, num2) {
    result = num1 + num2;  
    return result
 }

 substract = function(num1, num2) {
    result = num1 - num2 ;
    return result
 }

 multiply = function(num1, num2) {
    result = num1 * num2; 
    return result 
 }

 divide = function( num1, num2) {
    result = num1 / num2; 
    return result;
 }

 sum = function(array) { 
    result = 0; 
    for (index in array) {
        result += array[index];
    }
    return result
 }

 let operandCreator = ''; 
 let operandContainer = [];
 let flag = [];

 const screen = document.getElementById("screen");


 // storing frontend number element inside variables and giving it an event listener at the same time  

 const zero = document.getElementById("zero").addEventListener("click", () => {
    operandCreator += 0;
    screen.textContent = operandCreator;
});

 const one = document.getElementById("one").addEventListener("click", () => {
    operandCreator += 1;
    screen.textContent = operandCreator; 
    
});
 const two = document.getElementById("two").addEventListener("click", () => {
    operandCreator += 2; 
    screen.textContent = operandCreator;
    
 });
 const three = document.getElementById("three").addEventListener("click", () => {
    operandCreator += 3; 
    screen.textContent = operandCreator;
    
 });
 const four = document.getElementById("four").addEventListener("click", () => {
    operandCreator += 4; 
    screen.textContent = operandCreator;
    
 });
 const five = document.getElementById("five").addEventListener("click", () => {
    operandCreator += 5; 
    screen.textContent = operandCreator;
    
 });
 const six = document.getElementById("six").addEventListener("click", () => {
    operandCreator += 6; 
    screen.textContent = operandCreator;
    
 });
 const seven = document.getElementById("seven").addEventListener("click", () => {
    operandCreator += 7; 
    screen.textContent = operandCreator;
    
 });
 const eight = document.getElementById("eight").addEventListener("click", () => {
    operandCreator += 8; 
    screen.textContent = operandCreator;
    
 });
 const nine = document.getElementById("nine").addEventListener("click", () => {
    operandCreator += 9; 
    screen.textContent = operandCreator;
    
 });

 // Storing frontend operands elements inside variables and giving it an event listener at the same time

 const plus = document.getElementById("plus").addEventListener("click", () => {
    screen.textContent = '+';
    operandContainer.push(Math.floor(operandCreator)); 
    operandCreator = [];
    console.log(operandContainer);
    flag = 'add';

    
    
 });
 const minus = document.getElementById("minus").addEventListener("click", () => {
    screen.textContent = '-';
    operandContainer.push(Math.floor(operandCreator));
    operandCreator = [];
    console.log(operandContainer);
    flag = 'substract'

 });
 const multiplication = document.getElementById("multiply").addEventListener("click", () => {
    screen.textContent = 'x'; 
    operandContainer.push(Math.floor(operandCreator));
    operandCreator = [];
    console.log(operandContainer);
    flag = 'multiplication';
 });

 const division = document.getElementById("divide").addEventListener("click", () => {
    screen.textContent = '/'; 
    operandContainer.push(Math.floor(operandCreator)); 
    operandCreator = []; 
    console.log(operandContainer); 
    flag = 'division';
 });
 
 const clear = document.getElementById("clear").addEventListener("click", () => {
    operandContainer = [];
    operandCreator = '';
    flag = [];
    console.log(operandContainer);
    console.log(operandCreator); 
    console.log(flag);
    screen.textContent = '';


 });
 const decimal = document.getElementById("decimal").addEventListener("click", () => {alert("It works mate!!!")});
 const ans = document.getElementById("ans").addEventListener("click", () => {alert("It works mate!!!")});
 const sqareRoot = document.getElementById("square-root").addEventListener("click", () => {alert("It works mate!!!")});
 const pi = document.getElementById("pi").addEventListener("click", () => {alert("It works mate!!!")});
 //const squared = document.getElementById("x2").addEventListener("click", () => {alert("It works mate!!!")});
 
 const equal = document.getElementById("equal").addEventListener("click",() => {
    if (flag == 'substract'){
        operandContainer.push(Math.floor(operandCreator)); 
        let result = substract(operandContainer[0], operandContainer[1]);
        screen.textContent = result; 
    }
    if (flag == 'multiplication'){
        operandContainer.push(Math.floor(operandCreator)); 
        let result = multiply(operandContainer[0], operandContainer[1]);
        screen.textContent = result;
    }  
    if (flag == 'division') {
        operandContainer.push(Math.floor(operandCreator)); 
        let result = divide(operandContainer[0], operandContainer[1]);
        screen.textContent = result.toFixed(3); 
    }
    if (flag == 'add'){
        operandContainer.push(Math.floor(operandCreator)); 
        if (operandContainer.length > 2) {
            //operandContainer.push(Math.floor(operandCreator)); 
            screen.textContent = sum(operandContainer); 
        }
        else{
            //operandContainer.push(Math.floor(operandCreator)); 
            let result = add(operandContainer[0], operandContainer[1]);
            screen.textContent = result; }
    }
 });


 


 