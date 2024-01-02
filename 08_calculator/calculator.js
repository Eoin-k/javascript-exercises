const add = function(a,b) {
	return a + b;
    
};

const subtract = function(a,b) {
	return a - b ;
};

const sum = function(array) {
	let sum =  array.reduce((total, amount) => total + amount, 0)
  return sum;
};

const multiply = function(array) {
let multiply = array.reduce((total, amount)=> total * amount)
return multiply;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result = result * num
  }
  return result;
  }
  

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
