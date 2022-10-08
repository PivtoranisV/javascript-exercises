const removeFromArray = function (arr, ...args) {
  //   for (const arg of args) {
  //     if (arr.includes(arg)) {
  //       arr.splice(arr.indexOf(arg), 1);
  //     }
  //   }
  //   return arr;
  return arr.filter((el) => !args.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
