const convertToCelsius = function(temp) {
  const degreesCelsius = (temp-32) * (5/9)
  if (degreesCelsius == 0) { 
    return 0;
  } else {
    return Number(degreesCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  const degreesFahrenheit = (temp * (9/5)) + 32
  if (degreesFahrenheit == 0) {
    return 0;
  } else {
    return Number(degreesFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
