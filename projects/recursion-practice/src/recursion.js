// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-
//negative integer n, denoted by n!, is the product of all positive 
//integers less than or equal to n.
// Ex:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1)); 
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array) {
  flatArr = array.flat(100);
  console.log(flatArr);
  if (flatArr.length === 0) {
    return 0;
  } else {
    console.log(flatArr);
    return flatArr[0] + arraySum(flatArr.slice(1)); 
  }
};

//console.log(arraySum([1,[2,3],[[4]],5])); // 15

// 4. Check if a number is even.

var isEven = function(n) {
  if (n < 0) {
    return isEven(n + 2);
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } // else run isEven on n - 2
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
  if (n === 0) {
    return n;
  } else if (n < 0) {
    console.log(n)
    return n + 1 + sumBelow(n + 1);
  } else {
    console.log(n)
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {
  //var arr = [];
  if (x - y === 1 || x - y === -1) { 
    return [];
  } else if (x === y) {
    return [];
  } else if (x > y) {
    return [x - 1, ...range(x - 1, y)]; 
  } else if (y > x) {
    return [...range(x, y - 1), y - 1]; 
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  if (exp < 0) {
    //console.log((1 / base) * exponent(base, exp + 1));
    return Number(((1 / base) * exponent(base, exp + 1)).toFixed(10));
  } else if (exp > 0) {
  return base * exponent(base, exp - 1); 
  } else if (exp === 0) {
    return 1;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n, y = 0) {
  // base case is y = 100
  if (y === 100) {
    return false;
  } else if ((Math.log2(n)) === y) {
    // if (Math.log2(n)) === y
    return true;
  } else {
    return powerOfTwo(n, (y + 1));
  }
};

// 9. Write a function that accepts a string and reverses it.

var reverse = function(string) {
  //base case
  if (string.length === 1)
    return string[0];
  //recursion
  return string[string.length - 1] + 
    reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string) {
  cleanString = string.toLowerCase().replace(/[^0-9a-z]/gi, '')
  //base case
  if (cleanString.length <= 1) {
    return true;
  //recursion
  } else if (cleanString[0] === cleanString[cleanString.length - 1]) {
//compare string[0] === string[string.length - 1] & slice string by first & last character
    return palindrome(cleanString.slice(1, cleanString.length -1))
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {
  //base case
  if (x < y) {
    return x;
  //recursion
  } else {
    //subtract y from x until x < y
    return modulo(x - y, y);  
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

var multiply = function(x, y) {
  if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x; 
  } else if (y < 0){
    return (-x) + multiply(x, y + 1); 
  } else {
    return x + multiply(x, y - 1); 
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

var divide = function(x, y) {
  let count = 0
  if (x === 0) {
    return count;
  } else {
    return count += 1 + divide(x - y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = function(x, y) {

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  //base case:
  if (str1[0] !== str2[0]) {
    return false;
  } else if (str1.length === 0 && str2.length === 0) {
    return true;
  //recursion: 
  } else if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){
  if (str.length === 0) {
    return [];
  } else {
    return [str[0], ...createArray(str.slice(1, str.length))]; 
  }
};

// 17. Reverse the order of an array

var reverseArr = function (array) {
  //base case: 
  if(array.length === 0) {
  return [];
  } else {
  //recursion: push avalues of newArr[i] to reversedArr
  return [array[array.length -1], ...reverseArr(array.slice(0, array.length - 1))];
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length) {
  //base case: length === 0
  if (length === 0) {
    return []
  //recursion: push value into the array each time, lower length
  } return [value, ...buildList(value, length - 1)];  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2


var countOccurrence = function(array, value) {
  var count = 0
  //base case
  if (array.length === 0) {
    return count;
  } else if(array[0] === value) {
    return count += 1 + countOccurrence(array.slice(1), value);
  } 
  return count += countOccurrence(array.slice(1), value);
  //recursion
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback) {
  //base case: stop when you've reached array.length -1
  if (array.length === 0) {
    return [];
  }
  //recursion
  return [callback(array[0]), ...rMap(array.slice(1), callback)]
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var countKeysInObj = function(obj, key) {
  var count = 0;
  //basecase
  if (obj === {}) {
    return count;
  //recursion
  } else if(obj[key] === key) {
    return count += 1 + countKeysInObj(obj.slice(1), value);
  } 
  return count += countOccurrence(array.slice(1), value);
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

var fibonacci = function(n) {};
//0 0th position = 0
//1 1st position = 1
//1 2nd position = 0th + 1st
//                  0  +  1
//2 3rd position = 2nd + 1st 
//           0th + 1st + 1st
//            0  +  1  +  1
//                  2
//3 4th position = 3rd + 2nd
//           1st + 2nd + 2nd
//      1st + 0th + 1st + 0th + 1st
//       1  +  0  +  1  +  0  +  1
//                  3
//5 5th position = 4th + 3rd 
//           3rd + 2nd + 3rd 
//     2nd + 1st + 2nd + 2nd + 1st 
//                  5
//6 6th position = 5th + 4th = 5 + 3 = 8

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//if n = 5 => 5fib = (4fib) + (3fib) = (3fib + 2fib) + (2fib + 1fib)
//if (fib 1) {return 1}
//else if (fib n) {return fib(n-1) + fib (n -2)}

var nthFibo = function(n) {
  if ( n === 0) {
    return 0;
  } else if (n < 0) {
    return null;
  } else if (n === 2 || n === 1) { 
    return 1;
  } else {
  //recursion: n = fib(n - 1) + fib(n - 2)
    return nthFibo(n - 1) + nthFibo(n - 2)
  };
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = function(input) {
  //base case: input.length === 0
  if(input.length === 0) {
    return [];
  } else {
    //recursion: take every index and .toUpperCase();
    return [input[0].toUpperCase(), ...capitalizeWords(input.slice(1, input.length))];
    }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = function(array) {
  //base case: input.length === 0
  if(array.length === 0) {
    return [];
  } else {
    //recursion: take every index and array[0][0].toUpperCase() + rest of word
    return [array[0][0].toUpperCase().concat(array[0].slice(1, array[0].length)), 
    ...capitalizeFirst(array.slice(1, array.length))];
    }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
//arr = ['p', 'o', 't', 'a', 't', 'o']

var letterTally = function(str, obj) {
  var arr = str.split('');
  //base case: array length = 0
  if (arr.length === 0) {
    return {};
  //starting point: create the object
  } else if (obj === undefined){
    obj = {};
    //put in first letter
    obj[arr[0]] = 1; 
    //recurse with rest of string & obj
    letterTally(str.slice(1, arr.length), obj);
  }else if (obj[arr[0]]) {
  //rest of recursion: if key exists, add one to value
    obj[arr[0]] += 1;
    letterTally(str.slice(1, arr.length), obj);
  } else {
    //create key with value 1
    obj[arr[0]] = 1; 
    letterTally(str.slice(1, arr.length), obj);
  }
  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = function(list) {
  //base case: array empty
  if(list.length === 0) {
    return [];
  } else if (list[0] === list[1]) {
    //recursion if list[0] === list[1]
    return [...compress(list.slice(1, list.length))];
  } else {
    return [list[0], ...compress(list.slice(1, list.length))];
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array) {
  //base case: array empty
  if(array.length === 0) {
    return [];
  } else if (array[0] === 0 && array[1] === 0) {
    return [...minimizeZeroes(array.slice(1, array.length))];
  } else {
    return [array[0], ...minimizeZeroes(array.slice(1, array.length))];
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array, retArr = []) {
    var values = array.slice();
    var element = values.shift();
  
    if(array.length === 0){
      return [];
    }
    //if array length is odd make the element positive 
    if(array.length % 2 !== 0){
      //is the number positive 
      return [element > 0 ? 0-element : element].concat(alternateSign(values));
    } else {
      //if the array length is even make the element positive
  
      //is the element negative
      return [element < 0 ? 0-element: element].concat(alternateSign(values));
    }  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str, newArr = []) {
  var arr = str.split(' ') // => ['I', 'have', '5', 'dogs', 'and', '6', 'ponies']
  var obj = {
    0: 'zero', 
    1: 'one', 
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine'
  }  
  //base case
  if (str.length === 0) {
    //recursion: if not a num, return word
  } else if (isNaN(arr[0]) === false) {
    var numWord = obj[Number(arr[0])];
    newArr.push(numWord); 
    //console.log('num: ' + newArr);
    return numToText(arr.slice(1, str.length).join(' '), newArr);
  //else convert & return Number()
  } else {
    newArr.push(arr[0]); 
    //console.log('word: ' + newArr);
    return numToText(arr.slice(1, str.length).join(' '), newArr);
  }
  return newArr.join(' ')
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
