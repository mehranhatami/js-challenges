(function (mergeArrays) {
  'use strict';

  if (typeof mergeArrays !== 'function') {
    console.warn('You should import "arrays/mergeArrays.js" in order to use mergeArrays module!');
    return;
  }

  var arrayA = [],
    arrayA2 = [],
    arrayB,
    arrayB2 = [],
    i = 100,
    len = 2000,
    arrayC,
    arrayC2 = [],
    lengthMatch = true,
    wellSorted = true,
    arrayAIsInResult = true,
    arrayBIsInResult = true;

  for (; i <= len; i += 1) {
    arrayA.push(i * 2);
  }

  arrayB = [541, 7009, 1001, 501, 1101, 3110, 4311, 9141, 701, 99, 451, 9, 3511, 971];

  //make a clone of arrayA and arrayB
  for (i = 0, len = arrayA.length; i < len; i += 1) {
    arrayA2.push(arrayA[i]);
  }
  for (i = 0, len = arrayB.length; i < len; i += 1) {
    arrayB2.push(arrayB[i]);
  }

  arrayC = mergeArrays(arrayA, arrayB);

  //restore the original values
  arrayA = arrayA2;
  arrayB = arrayB2;

  console.log('arrayA.length:' + arrayA.length);
  console.log('arrayB.length:' + arrayB.length);
  console.log('arrayA.length + arrayB.length:' + (arrayA.length + arrayB.length));
  console.log('arrayC.length:' + arrayC.length);

  lengthMatch = (arrayA.length + arrayB.length === arrayC.length);
  if (!lengthMatch) {
    console.log('mergeArrays module is not merging properly the length missmatch!');
  }


  for (i = 0; i < arrayA.length; i += 1) {
    if (arrayC.indexOf(arrayA[i]) === -1) {
      arrayAIsInResult = false;
      break;
    }
  }

  if (arrayAIsInResult) {
    console.log('mergeArrays result(arrayC) contains all of the "arrayA"\'s items');
  } else {
    console.log('mergeArrays result(arrayC) does not  contain all of the "arrayA"\'s items');
  }

  for (i = 0; i < arrayB.length; i += 1) {
    if (arrayC.indexOf(arrayB[i]) === -1) {
      arrayBIsInResult = false;
      break;
    }
  }

  if (arrayBIsInResult) {
    console.log('mergeArrays result(arrayC) contains all of the "arrayB"\'s items');
  } else {
    console.log('mergeArrays result(arrayC) does not  contain all of the "arrayB"\'s items');
  }

  //make a clone to check if the result is well sorted
  for (i = 0, len = arrayC.length; i < len; i += 1) {
    arrayC2.push(arrayC[i]);
  }

  arrayC2.sort(function (x, y) {
    return x - y;
  });

  //compare arrayC2 and arrayC
  for (i = 0, len = arrayC.length; i < len; i += 1) {
    if (arrayC[i] !== arrayC2[i]) {
      wellSorted = false;
      break;
    }
  }

  if (wellSorted) {
    console.log('mergeArrays result(arrayC) is well-sorted');
  } else {
    console.log('mergeArrays result(arrayC) is not well-sorted');
  }

  if (lengthMatch && arrayAIsInResult && arrayBIsInResult && wellSorted) {
    console.log('*********GREAT*JOB***********');
    console.log('mergeArrays module IS WORKING!');
    console.log('*********TEST*FINISHED*******');
  } else {
    console.log('++++++++++++FIX IT!+++++++');
    console.log('mergeArrays IS NOT WORKING!');
    console.log('+++++++++TEST+FINISHED+++++');
  }


}(this.mergeArrays));