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



