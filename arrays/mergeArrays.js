(function (global) {
  'use strict';

  var push = Array.prototype.push,
    nativeIsArray = Array.isArray,
    isArray;

  //pollyfil for isArray function
  isArray = (function () {
    if (typeof nativeIsArray === 'function') {
      return nativeIsArray;
    }
    var objToString = Object.prototype.toString;
    return function (obj) {
      return objToString.call(obj) === '[object Array]';
    };
  }());

  function mergeArrays(arrayA, arrayB) {

    //prevent exception cases from messing with function
    if (!isArray(arrayA) || !isArray(arrayB)) {
      console.warn('Invalid parameter! you can only pass arrays to mergeArrays function');
      return;
    }

    var firstB, lastB,
      firstA, lastA,
      lenA = arrayA.length,
      lenB = arrayB.length,
      arrayC = [];

    //this is how we get arrayB sorted
    arrayB.sort(function (x, y) {
      return x - y;
    });

    //fast path for corner cases, like when arrays do not have shared scopes
    //to prevent it from iterating over the arrays when it is not needed!
    firstA = arrayA[0];
    lastA = arrayA[lenA - 1];

    firstB = arrayB[0];
    lastB = arrayB[lenB - 1];

    if (lastB < firstA) {
      push.apply(arrayC, arrayB);
      push.apply(arrayC, arrayA);
      return arrayC;
    }
    if (firstB > lastA) {
      push.apply(arrayC, arrayA);
      push.apply(arrayC, arrayB);
      return arrayC;
    }

    //we start iterating until none of both arrays has data
    while (arrayA.length || arrayB.length) {

      firstA = arrayA[0];
      firstB = arrayB[0];

      //using shift we remove the first index and push it to arrayC
      //this way we always have a first fresh 
      if (firstA < firstB) {
        arrayC.push(arrayA.shift());
      } else {
        arrayC.push(arrayB.shift());
      }
    }

    return arrayC;
  }

  //expose mergeArrays function to the global scope
  global.mergeArrays = mergeArrays;

}(this));