
//FUNCTIONS

//0. functions are blocks of code that can be created at one point and then called or used later. 
//      Functions can be called on different data rather saving time rewriting the same code. 

//1. Phases - functions have two phases
//      a. declaration - when a function is created with parameters, and a code block
                function multiply(a, b) {
                    return a * b;
                }
//      b. invocation - when a function is called or used with your program
                var a = 10, b = 5
                multiply(num1, num2); // returns 50
//2. Parameters vs Arguments - parameters are the placesholders when a function is called. In the
//      example above, a and b are parameters. Arguments are the values passed to the function 
//      during invocation. In the example above, num1 and num2 are arguments. Multiply could be 
//      called or invoked again with different arguments. 

//3. Syntax - functions are called with the keyword function, followed by the function's name 
//      and parentheses outlining the parameters (if any), and finally brackets outlining the 
//      code block
                function add(p, q){
                    return p + q;
                }

//4. Assigning to a variable - if a function is assigned to a variable, that variable can be 
//      called within another statement
                var divide = function(x, y) {
                    return x / y;
                }
                function percentage(part, whole){
                    return divide(part, whole) * 100 + '%'
                } 
                console.log(percentage(2, 10); // logs '20%'

//5. Scope - due to the hoisting process, functions are brought to the top of a program and can be
//      called before they are declared. This is known as globally-scoped. 
                subtract(4, 2) // returns 2
                function subtract(w, x) {
                    return w - x;   // even though the function wasnt declared until here, hoisting
                }                   // allows the function to be called earlier in the program
//      Additionally, functions create a scope that let and const are subject to. This is called
//      function-scoped. When a variable is declared within a function, it can't be accessed outside 
//      of that function. It can however, be accessed inside of that scope, including child scopes. 

//6. Closures - when a function is declared, any variables available to it at that time are then 
//      available when the function is invoked. A closure is created when the function is declared 
//      and important parts of the local enviroment are inclded in that closure are available later. 
