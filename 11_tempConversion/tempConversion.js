const convertToCelsius = function(f) {
  let num=5/9*(f-32)
  return Math.round(num*10)/10
};

const convertToFahrenheit = function(c) {
  let num=9/5*(c)+(32)
  return Math.round(num*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
