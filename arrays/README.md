# mergeArrays.js
The fastest way to merge a not sorted array of numbers with a sorted one orderly.

```javascript
var arrayA = [5, 8, 11, 90],
  arrayB = [3, 23, 110, 400, 9],
  arrayC;

arrayC = mergeArrays(arrayA, arrayB);

console.log(arrayC);
// => [3, 5, 8, 9, 11, 23, 90, 110, 400]
```

# secondLargest.js

Three different algorithms for finding the the second largest number in a not sorted array of numbers:

```javascript
var numbers = [3, 4, 2, 1, 9, 6];

var firstResult = secondLargest.algorithms.first(numbers);
// => 6

var secondResult = secondLargest.algorithms.second(numbers);
// => 6

var thirdResult = secondLargest.algorithms.third(numbers);
// => 6

console.log(firstResult, secondResult, thirdResult);
// => [6, 6, 6]
```

How to require:

```javascript
//global just add the script tag to the page
secondLargest.algorithms.first([3, 2, 1]);

//NodeJS require it with a CommonJS style
require('./secondLargest').algorithms.second([3, 2, 1]);

require('./secondLargest', function(secondLargest){
 secondLargest.algorithms.third([3, 2, 1]);
})
```
