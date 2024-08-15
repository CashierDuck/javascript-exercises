const removeFromArray = function(arr, ...args) {
    
    const removedArray = [];

    arr.forEach((item) => {
        if(!args.includes(item)){
            removedArray.push(item);
        }
    });

    return removedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
