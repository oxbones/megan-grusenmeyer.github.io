/*
DATA TYPES
0. In Javascript data can be stored many ways. Depending on what your code accomplishes 
            or what type of information you're working with, you'll want to use differnt 
            js data types to refer to your data
1. Simple vs complex - all of the js data types can be categorized as simple (aka 
            primitive) or complex (aka objects)
        a. Simple data types store only one kind of information: a number, a string, a 
                boolean, etc. 
        b. Complex data types can store many types of information. Each complex data type
                has a structure for organizing the info they contain
2. Referencing - Simple and complex data types differ in how they're referenced. Simple data 
            types are 'copy by value' meaning the info contained is copied and the two names 
            no longer reference the same item. */
                let num1 = 5; // numbers are a simple data type
                let num2 = num1; // num2 is pointing to num1 
                                 // num1 is simple, so num2 is now equal to 5
            
            /*Copy by Value means the second variable now equals the number 5 and not num1. 
            Altering num1 has no effect on num2. */
                num1 = num1 * 5;
                console.log(num1); // => 25
                console.log(num2); // => 5, modifying the 1st var didn't change the 2nd var

            /*Unlike simple data types, complex data types are 'copied by reference.'  
            Initialzing a second variable equal to an existing complex variable will result
            in two variables pointing to the same object. Compy by Refernce mean modifying 
            one changes the other. */
                let obj1 = {val: 5}; // Objects are a complex data type
                let obj2 = obj1; //obj2 is pointing to obj1 
                                 //since obj1 is complex, they now both refer to the same obj
                obj2.val = obj2.val * 5;
                console.log(obj2); // => {val: 25}
                console.log(obj1); // => {val: 25}, modifying obj2 changed obj1

// 2. types
//         a. Number - numbers represent the numeric value you recognize and can be operated on 
//                 mathematically. 
                        var num = 5;
                        var otherNum = 20;
                        var sum = num + otherNum; // sum = 25
//         b. String - strings are anything contained in "" or ''. They can be words, phrases, 
//                 symbols, even numbers. When numbers are contained in quotes, they can not be 
//                 operated on mathematically. 
                        var tool = 'saw';
                        var animal = 'horse';
                        var bench = tool + animal; // bench = 'sawhorse'
                        var num = '5'; 
                        var otherNum = '20'
                        var sum = num + otherNum; // sum = '520' 
                                                  // strings aren't numbers to javascript
//         c. Boolean - booleans are true false values. They interact with functions in a useful
//                  way. 
                        var johnnysAge = 16
                        var buyAlc = function(num) {
                                if(num >= 21) { //this line is returning true/false 
                                        return 'can buy alcohol';
                                } else {
                                        return 'not yet';
                                }
                        };
                        var canJohnnyBuyAlc = buyAlc(johnnysAge) // returns 'not yet'
//         d. Array - arrays are the first complex data type here. They're essentially numbered 
//                  lists. The lists can have things added or removed or referenced. What's the 
//                  third thing we're doing today? Note: these lists always start with zero and 
//                  there number is called an index. 
                        var animals = ['cat', 'dog', 'dragonfly', 'unicorn']
                        var thirdAnimal = animals[2] //because cat is 0, dog is 1, dragonfly is 2
//                  
//         e. Object - objects are another complex data type. Unlike arrays, they don sequence 
//                   the data they store. Objects store data in 'key-value pairs.' This is a set
//                   of a title and a value. 
                        var planet = {name: 'jupiter', moons: 79, gasGiant: true}
//                   Each value can be called by referncing its key. 
                        var jupitersMoons = planet.moons  // jupitersMoons = 79
//         f. function - functions are code blocks that return or change something within your
//                   program. They may add numbers, tell you if someone is old enough to drink,
//                   or redefine a variable. Functions can be stored as a variable to reference
//                   later. 
                        var total = function(num1, num2, num3, num4){
                                return num1 + num2 + num3 + num4;
                        };
                        var that = 5, these = 10, theOther = 15, those = 20;
                        total(that, these, theOther, those); //return 50
//         g. undefined - if a variable hasn't been assigned a value, its considered undefined. 
//                    Method and statement will return undefined if they use a variable that is 
//                    undefined. Function will return undefined if no value was returned.
                        var puppy;
                        console.log(puppy) // returns undefined bc no value has been assigned yet
//         h. null - is the intentional absence of a value. Unlike undefined, null is assigned. 
//                    Unlike the number 0, it resolves to falsey in boolean operators. 
                        var sleep = null
                        var doWork = function(mood){
                                if (mood) { //resoves to false, this code block isnt executed
                                        return 'do something';
                                } else {
                                        return 'do nothing';
                                }
                        }
                        doWork(sleep) //resolves to 'do nothing'
//         i. NaN - means 'not a number' and will be returned if you try to do a mathematical
//                    operation on something that isnt a number
                        var pet = 'Harpo';
                        var div = pet + 5 //returns NaN
//         j. infinity & -infinity - these can be used in multiplication and division like you would 
//                   expect.    
                        var smallNum = Number.NEGATIVE_INFINITY;
                        var bigNum = Number.POSATIVE_INFINITY;













