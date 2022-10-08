const reverseString = function (text) {
  const arrayOfChar = text.split('');

  return arrayOfChar.reverse().join('');
};

//console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
