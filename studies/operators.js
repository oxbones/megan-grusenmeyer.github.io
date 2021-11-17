// OPERATORS
//
// 0. Assignment Operators - assign a value to a variable. The one we've seen already is the 
//          equals sign(=), as in var name = 'megan'. There are others that change the values 
//          of numbers as well. +=, -=, *= and /= each does the arithmatic operation (+-*/)
//          to the existing value and the new value and reassigns the variable
                    var num = 5
                    num += 20 // 5 + 20 is the new assignment for num
                    console.log(num); // 25 
//          Two other assignment operators are %= and **=. % is the remainder operator. It 
//          returns the reminder of dividing two numbers. 
                    var amount = 25;
                    var sale = function(num) {
                        num = num *.85
                    }                    
//          ** is the exponent operator. 
                    var base = 3
                    base **= 3 / 3 * 3 * 3 
                    console.log(base) // base is now equal to 27
// 1. Arithmatic Operators - operators that perform normal mathematical operations: + - * / and 
//          exponents ** and remainder of %. Additionally increment/decrement ++ and -- are included. 
//          They act on numbers to perform the function and can be chained together following
//          mathematical rules. 
                    var dividend = 10 %= 3; // 3 divides into 10 3 times, with a remainder of 1
                    console.log(dividend) // 1

// 2. Comparison Operators - these operators resolve to true/false statements about the number(s) 
//          being compared. They include strictly equal, equal, strickly unequal, unequal, greater
//          than, less than, and greater than or equal to and less than or equal to
                    8 < 2 //compares whether 8 is greater than 2 and resolve the boolean: false
                    console.log(8 > 2) // => false
//          Stricktly equal (===) and equal (==) are differentiated by data type
                    '8' === 8 // => false because '8' is a string, while 8 is a number
                    '8' == 8 // => true, equal doesnt consider data type

// 3. Logical Operators - include and (&&), or (||) and the bang operator, not (!). Like comparison
//          operators, logical operators resolve to a true/false statement. 
                    4 < 5 && 4 < 10 // => true because both statements are true
                    4 < 5 && 4 < 0 // => false, even though the 1st state is true, the 2nd is false
//          Or operates where any statment resulting in true gives you true
                    4 < 5 || 4 < 0 || 4 > 8 // => true because at least one statement is true

// 4. Unary Operators - operate on only one operand or parameter. Increment and decrement are unary
                    x = 9;
                    x++; // only one operand is called
                    console.log(x); // => 10 

// 5. Ternary Operators - takes three operands. The conditional ternary operator can be used as a 
//           stand in for an if statement. It has the form:
//                                      condition   ?   exprIfTrue   :  exprIfFalse
                    let compare = (x, y) => (x < y) ? 'x is smaller' : 'x is bigger';
                    console.log(compare (10, 20)); // => x is smaller
                    console.log(compare(50, 30)); // => x is bigger








