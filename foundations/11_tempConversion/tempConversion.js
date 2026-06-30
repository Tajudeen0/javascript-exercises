const convertToCelsius = function(arg) {
  return Math.round(((arg-32) * 5/9)* 10)/10
};

const convertToFahrenheit = function(arg) {
  return Math.round((arg * 9/5 + 32) * 10)/10
};

convertToCelsius(35);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
