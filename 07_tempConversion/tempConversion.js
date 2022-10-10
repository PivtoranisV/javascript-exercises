const ftoc = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius % 1 === 0 ? celsius : +celsius.toFixed(1);
};

const ctof = function (celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit % 1 === 0 ? fahrenheit : +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
