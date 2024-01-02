const sumAll = function(min,max) {
      let inputs = [];
      inputs.push(min,max);
      inputs = inputs.sort(function(a, b) {return a - b});
      console.log(inputs);
   
if (inputs[0] !== typeof 'number' || inputs[1] !== typeof 'number'){
    return "ERROR"
}
else if (inputs[0] < 0 || inputs[1] < 0){
    return "ERROR";
}
else{
return ((inputs[1]-inputs[0])+1) * (inputs[0] + inputs[1]) / 2;
}
};

// Do not edit below this line
module.exports = sumAll;
