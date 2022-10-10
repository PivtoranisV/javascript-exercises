const sumAll = function (first, last) {
  //   if (
  //     first < 0 ||
  //     last < 0 ||
  //     typeof first !== 'number' ||
  //     typeof last !== 'number'
  //   ) {
  //     return 'ERROR';
  //   }

  //   let arrayOfAllNumbers = [];
  //   if (first < last) {
  //     for (let i = first; i <= last; i++) {
  //       arrayOfAllNumbers.push(i);
  //     }
  //   } else {
  //     for (let i = last; i <= first; i++) {
  //       arrayOfAllNumbers.push(i);
  //     }
  //   }

  //   let sum = 0;
  //   for (let i = 0; i < arrayOfAllNumbers.length; i++) {
  //     sum += arrayOfAllNumbers[i];
  //   }
  //   return sum;
  //   if (
  //     first < 0 ||
  //     last < 0 ||
  //     typeof first !== 'number' ||
  //     typeof last !== 'number'
  //   ) {
  //     return 'ERROR';
  //   }

  //   let arrayLength = 0;
  //   let arrayOfAllNumbers;
  //   if (last > first) {
  //     arrayLength = last - first + 1;
  //     arrayOfAllNumbers = Array(arrayLength)
  //       .fill(first)
  //       .map((el, index) => el + index);
  //   } else {
  //     arrayLength = first - last + 1;
  //     arrayOfAllNumbers = Array(arrayLength)
  //       .fill(last)
  //       .map((el, index) => el + index);
  //   }

  //   return arrayOfAllNumbers.reduce((prev, next) => prev + next);
  if (
    first < 0 ||
    last < 0 ||
    typeof first !== 'number' ||
    typeof last !== 'number'
  ) {
    return 'ERROR';
  }

  let sum = 0;
  if (last > first) {
    for (let i = first; i <= last; i++) {
      sum += i;
    }
  } else {
    for (let i = last; i <= first; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
