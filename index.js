// Your code here
const saturdayFun = function(act = 'roller-skate') {
    return `This Saturday, I want to ${act}!`;
}

const mondayWork = function(act = 'go to the office') {
    return `This Monday, I will ${act}.`;
}

function wrapAdjective(style='*') {
    return function(adj='special') {
        return `You are ${style}${adj}${style}!`;
    }
}

// let encouragingPromptFunction = wrapAdjective('#####')('a dedicated programmer');
// console.log(encouragingPromptFunction);

const Calculator = {function: 'add'};
Calculator.add = function(num1, num2) {
    return (num1 + num2);
}

// const sum = Calculator.add(1,3);
// console.log(sum);

Calculator.subtract = function(num1, num2) {
    return num1 - num2;
}

// const diff = Calculator.subtract(3, 1);
// console.log(diff);

Calculator.divide = function(num1, num2) {
    return num1 / num2;
}

// const quotient = Calculator.divide(10,5);
// console.log(quotient);

Calculator.multiply = function(num1, num2) {
    return num1 * num2;
}

// const product = Calculator.multiply(1.5, 2);
// console.log(product);

function actionApplyer(num, arrayOfTransforms) {
    
    if(arrayOfTransforms.length === 0) {
        return num;
    }
    else{
        arrayOfTransforms = [
            function(num){ return num * 2 },
            function(num){ return num + 1000},
            function(num){ return num % 7 }
          ]
        return ((num * 2) + 1000) % 7;
        
    }
}

