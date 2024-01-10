const palindromes = function (string) {
    let lowerCase = string.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    return lowerCase.split("").reverse().join("") == lowerCase;
}


// Do not edit below this line
module.exports = palindromes;
