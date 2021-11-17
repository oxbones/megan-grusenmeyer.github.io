/*
VARIABLES
0. Variables point to data to be used in coding. Variables can reference numbers, strings, 
    booleans, arrays, objects, etc 
1. The data variables hold can be called, changed or manipulated 
2. There are two phases for variables, declaration (creation) and initialization (assignment) 
*/

// 1. declaration - creating a variable in your code. Use the keywords var, let or const 
//                  to create a variable. Variable are typically written in camelCase. 
var age;
let: fullName;
const: birthplace;

//At this point, age hasnt been assigned a value, the variable age doesn't point to anything 
console.log(age); // => undefined

// 2. initialization - assigning a value to a variable. Use the = symbol to assign a value
fullName = 'Megan Grusenmeyer';
birthplace = 'New Orleans, LA';

//Now those variables refer to a value
console.log(fullName); // => "Megan Grusenmeyer"

// 3. keywords - though var, let and const can all be used to declare a variable, they act
//               slightly diffrently. Their differences have to do with scope. Scope refers to 
//               where the variable is available
//
//      var - globally scoped or locally/function scoped, can be re-declared
var name = 'Megan';
var name = 'Sam';
//      let - locally/function scoped, prefered to var bc it can't be redeclared
//      const - locally/function scoped, once initialized, it can't be reassigned
const age = 25
age = 26 // => error: assignment to constant variable

// 4. hoisting - the process where variables declarations are 'moved' (they're not really moved) 
//              to the top of the scope, prior to execution of the code. This is done by an 
//              'interpreter' and allows variables to be referenced before they're declared 
// 4.a  Only declarations are hoisted, not initializations. Initialization aren't executed 
//              until that line of code is reached 
// 4.b  Variables declared using var are initialized as undefined. Let and const are uninitialized 

console.log(pet); // => undefined becaue it was called with var, its hoisted with the value undefined
console.log(animal); // => ReferenceError uninitialized, called with let, hoisted uninitialized
console.log(age); // => ReferenceError uninitialized, called with const, hoisted uninitialized
var pet = true;
const animal = 'dog'; 
let age = 8;

