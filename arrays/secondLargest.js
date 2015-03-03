(function (expose) {
  'use strict';

  function getSecondLargest(numbers) {
    var i = 0,
      len = numbers.length,
      largest = 0,
      secondLargest = 0;

    for (; i < len; i += 1) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest) {
        secondLargest = numbers[i];
      }
    }
    return secondLargest;
  }

  function getSecondLargest2(numbers) {
    var largest,
      index;
    //This is optional, prevents possible changes in the original array
    numbers = numbers.slice();

    largest = Math.max.apply(Math, numbers);
    index = numbers.indexOf(largest);
    numbers.splice(index, 1);
    return Math.max.apply(Math, numbers);
  }

  function getSecondLargest3(numbers) {
    return numbers.sort(function (a, b) {
      return a > b;
    })[numbers.length - 2];
  }

  /**
   * Finds the the second largest number in an array of numbers(not sorted)
   *
   * @private
   * @param {Array} array The array to search.
   * @returns {number} Returns the second largest number.
   * @example
   *
   * var numbers = [3, 4, 2, 1, 9, 6];
   *
   * var firstResult = secondLargest.algorithms.first(numbers);
   * // => 6
   *
   * var secondResult = secondLargest.algorithms.second(numbers);
   * // => 6
   *
   * var thirdResult = secondLargest.algorithms.third(numbers);
   * // => 6
   *
   * console.log(firstResult, secondResult, thirdResult);
   * // => [3, 2, 1]
   *
   *
   * @example how to require
   *
   * //global just add the script tag to the page
   * secondLargest.algorithms.first([3, 2, 1]);
   *
   * //NodeJS require it with a CommonJS style
   * require('./secondLargest').algorithms.second([3, 2, 1]);
   *
   * require('./secondLargest', function(secondLargest){
   *   secondLargest.algorithms.third([3, 2, 1]);
   * })
   */
  function definition() {
    return {
      algorithms: {
        first: getSecondLargest,
        second: getSecondLargest2,
        third: getSecondLargest3
      }
    };
  }


  if (typeof exports === 'object') {
    // node export
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    // amd anonymous module registration
    define([], definition);
  } else {
    // browser or node global
    expose('secondLargest', definition());
  }
}(function (key, value) {
  this[key] = value;
}));
