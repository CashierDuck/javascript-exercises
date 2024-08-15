const sumAll = function(firstNum, secNum) {
    let sum = 0;

    if(typeof(firstNum) != "number" || typeof(secNum) != "number" || firstNum < 0 || secNum < 0 || firstNum%1 != 0 || secNum%1 != 0){
        return "ERROR";
    }

    if(firstNum > secNum){
        let temp = secNum;
        secNum = firstNum;
        firstNum = temp;
    }

    for(let i = secNum; i >= firstNum; i--){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
