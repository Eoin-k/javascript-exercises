const removeFromArray = function(arr,...args) {
    
return arr.filter(value => !args.includes(value));
};

// Do not edit below this lineS
module.exports = removeFromArray;
