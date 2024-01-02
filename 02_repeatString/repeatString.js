const repeatString = function(string, num) {
    let textContent = '';
    if (num < 0) return "ERROR";
 for (let i = 0; i < num; i++){
    
    textContent += string ;
 }
 return textContent;
};


// Do not edit below this line
module.exports = repeatString;
