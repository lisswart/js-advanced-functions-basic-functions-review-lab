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

const Calculator = {function: 'add'};
Calculator.add = function(num1, num2) {
    return (num1 + num2);
}

Calculator.subtract = function(num1, num2) {
    return num1 - num2;
}

Calculator.divide = function(num1, num2) {
    return num1 / num2;
}

Calculator.multiply = function(num1, num2) {
    return num1 * num2;
}

// const arrayOfTransforms = [
//     function(num){ return num * 2 },
//     function(num){ return num + 1000},
//     function(num){ return num % 7 }
//   ];
 
function actionApplyer(num, arr) {
    
    if(arr.length === 0) {
        return num;
    }
    else{
        // const product = arr[0](num);
        // const sum = arr[1](product);
        // const modulo = arr[2](sum);
        // return modulo;

        return arr[2](arr[1](arr[0](num)));
        
        // const [product, sum, modulo] = (num) => {return [arr[2](arr[1](arr[0](num)))];};
        // return modulo;
    }
}

console.log(actionApplyer(13, arrayOfTransforms));




