const convertToCelsius = function(far) {
  celTemp = (far - 32) * 5/9;
  return Math.round(celTemp * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  farTemp = (cel * 9/5) + 32;
  return Math.round(farTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
