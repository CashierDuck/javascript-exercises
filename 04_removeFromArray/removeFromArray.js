const removeFromArray = function(arr, ...manyMoreArgs) {

    for(const arg of manyMoreArgs){
        if (arg != Number){
            for(let i = 0; i < arr.length; i++){
                if(arg === arr[i]){
                    arr.splice(arg,arg+1);
                }
            }
        } else if (arg == Number){
            arr.splice(arg,arg+1);
        } else {
            break;
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
