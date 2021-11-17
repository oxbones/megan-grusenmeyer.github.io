
//LOOP5
//0. Loops are used when you want to execute the same code repeatedly. This is handy when working 
//      with arrays and objects or building data sets 

//1. Kinds of Loops
//      a. While loops - perform the code block they contain as long as the while condition is met. 
                var i = 0;
                var total = 0;
                while (i < 10) {
                    i++;
                    total += i;
                } // => 53 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
//      b. For loops - for loops use 3 statements to control their range. 
                for (initial statement, conditional statement, increment/decrement){
                    //code block
                }
//          The initial statement usually creates a counting variable. The conditional statment
//          outlines a condition that when true the code block will be performed, when false, the
//          loop is exited. the increment/decrement statement tells you how the counter is changed
//          each loop. Finally the code block which is performed each round. 
                function remove(arr, str) {
                    for (var i = 0; i <= arr.length - 1;  i++) {
                        if (arr[i] === str)
                        arr.splice(i, 1)
                    }
                }
//      c. For-in loops - useful for looping over objects. The for statement looks like:
                for (key in object) {
                    // code block 
                }
//          The code block is performed for each key value pair in the object. See #4 below for 
//          an example of a for loop being used on an object. 

//2. Forward vs Backward looping - when using a for loop, you can loop forwards or backwards over 
//      your counter and/or an array. To loop backwards, set your start condition to the highest 
//      counter, your conditional statement to end the loop when you reach the smallest number, and
//      your increment to decrement or get smaller until you reach the end condition. 
                function reverseArray(array) {
                    var reversedArr = [];
                    for (var i = array.length - 1; i >= 0; i--) { // starts at the last index, ends
                    reversedArr.push(array[i]);                   // at the 0 index, reduces by 1
                    }
                return reversedArr;
                };

//3. Looping over arrays - see above

//4. Looping over objects - 
                var obj = {one: 1, two: 2, three: 3}
                for (var key in obj) { // at each key in the object
                    obj[key] *= 5;     // this code is performed
                } 
                console.log(obj) // => {one: 5, two: 10, three: 15}