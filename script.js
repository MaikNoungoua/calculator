

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

 let operandCreator = ''; 
 let flag = [];
 let calculationString = [];
 let intermediateFlag = '';

 const screen = document.getElementById("result");


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
   operandCreator += ' + ';
    screen.textContent = operandCreator;
    flag = '+';  
    
 });
 const minus = document.getElementById("minus").addEventListener("click", () => {
   operandCreator += ' - ';
    //operandContainer.push(Math.floor(operandCreator));
    screen.textContent = operandCreator;
    flag = '-';

 });
 const multiplication = document.getElementById("multiply").addEventListener("click", () => {
    operandCreator += ' x '; 
    screen.textContent = operandCreator
    flag = 'x';
 });

 const division = document.getElementById("divide").addEventListener("click", () => {
   operandCreator += ' / '; 
   screen.textContent = operandCreator
   flag = '/';
 });
 
 const clear = document.getElementById("clear").addEventListener("click", () => {
    operandContainer = [];
    operandCreator = '';
    flag = [];
    screen.textContent = '';
 });

 function checkFlag (flag, operand1, operand2){

   console.log(flag);

   switch (flag){
      case '+':
         result = add(Math.floor(operand1),Math.floor(operand2));
         console.log(result);
         return result
      
      case '-':
         result = substract(Math.floor(operand1),Math.floor(operand2));
         return result

      case 'x':
         result = multiply(Math.floor(operand1),Math.floor(operand2));
         return result

      case '/':
         result = divide(Math.floor(operand1),Math.floor(operand2));
         return result

      


   
   }
   
 }

 function stringEvaluation (stringToEval){
   let intermediaryResult = 0;
   let splitString = stringToEval.split(" ");
   console.log(splitString);
   let elementInSplitString = splitString.length;
   console.log(`this is elementInString ${elementInSplitString}`);


   for (let i = 0; i < elementInSplitString; i++){
      console.log("within the for loop");
      console.log(splitString);
      console.log(`this is split string length ${splitString.length}`)
      if (splitString.length == 1){
         break;
      }
      else{
         intermediaryResult = checkFlag(splitString[1], splitString[0], splitString[2]);
         console.log(intermediaryResult);
         splitString.splice(0,3); //where we start and how many item we want to get rid of;
         console.log(`this is  split string after splice ${splitString}`);
         console.log(splitString);
         splitString.unshift(intermediaryResult);
         console.log(`this is  split string after pushing intermediaryResult ${splitString}`);
         console.log(splitString);
      }
      }
      
     

   } 
  

 
 const equal = document.getElementById("equal").addEventListener("click",() => {
    stringEvaluation(operandCreator);
    screen.textContent = result;
    operandContainer = [];
    operandCreator = '';
    flag = [];

   
 });

 function partialEval (){
   calculationString.push(Math.floor(operandCreator));
   calculationString.push(flag);
   screen.textContent = `${calculationString[0]}${calculationString[1]}`;
   operandCreator = '';
   flag = '';
   console.log(calculationString);

   if (calculationString.length = 3) {
      intermediateFlag = calculationString[1];
      console.log(intermediateFlag)
      let result = 0;
      switch (intermediateFlag) {
         case '+':
            result = add(Math.floor(calculationString[0]),Math.floor(calculationString[2]));
            console.log(result);
            screen.textContent = result; 
            break;
         
         case '-':
            result = substract(calculationString[0],calculationString[2]);
            screen.textContent = result;


      }
   }
   
 }


 //We are using a fucntion because it will make the code more readable by simply calling it at the 
 //end of each event listener 

 //we need the creation of a function that checks operandCOntainer's length: 
   // if > 2 we perform the operation and stores the results as the first ooperand for the next set of calculation. 

// of course this imply that the flag system that we implemented will really take effect here. Probably jsut having a single variable that check the value of the flag 
// assigns a operation to it and reset it to zero.

//Architecture of the function: 

      //evaluate the operandCOntainer's length
      //check the flag that has been set 
      //calls one of: add, multiply, susbstract, divide based on the flag and the value of operandCOntainer[0] and operandCOntainer[1]
      // shows the result sequentially, everytime one of the operand is pressed we have the result display on the screen. 
 


 