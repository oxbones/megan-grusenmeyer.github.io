
//STRING MANIPULATION

//0. Strings can be modified using some of the operators described in the previous section as well as 
//      some built-in methods. 

//1. String Operators
//      a. comparison operators - you can compare strings with ==, ===, !=, !==, > and <
                var wrd1 = 'yes', wrd2 = 'sure', wrd3 = 'yes';
                console.log(wrd1 === wrd2); // => false
                console.log(wrd1 === wrd3); // => true
//      b. plus(+) and plus equal (+=) - these can be used to concatenate strings
                var greet = 'Hi';
                var names = 'Janick & Liz';
                console.log(greet + ' ' + names); // => 'Hi Janick & Liz'

                //2. String Methods - Javascript has useful built-in methods for working with strings. 
//      a. length - returns the number of characters in a string
                var str = 'My Dear Aunt Sally'
                console.log(str.length); // logs 18 because str is 18 characters long
//      b. concat - can be used to put the contents of 2 strings into one combined string
                var str1 = 'Hello';
                var str2 = 'Dear';
                var str3 = str1.concat(' ', str2);
                console.log(str3); // logs 'Hello Dear'
//      c. split - divides strings into substrings and puts them in an array
                var phrase = 'please,let,the,dog,out'
                var arr = phrase.split(',')
                console.log(arr); // => ['please', 'let', 'the', 'dog', 'out']
//      d. slice - copies part of a string and returns the copy. Its takes 2 parameters (from, until)
                var phoneNumber = '504-322-9682';
                var localNumber = phoneNumber.slice(4, 30) //the 2nd parameter is optional, if it's 
                                    //greater than string.length or not included, slice will start 
                                    //at the beginning and continue through the end of the string. 
                console.log(localNumber); // => '322-9682'
                var localNumber2 = phoneNumber.slice(-8) //when a neg argument is given, slice counts 
                                                         //backwards from the end
                console.log(localNumber2); // => '322-9682'
//      e. substring - splits a string based on the given indices
                var note = 'Hi Sam, call me if you want to work on hw 504-322-9682'
                var phone = note.substring(43, 55); // '504-322-9682'
//      f. indexOf - finds if something exists within a string and returns the index if true
                var phone = '504-355-4215'
                phone.indexOf(504) // returns 0 because 504 is located at the first place in phone


