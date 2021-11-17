// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./megan-grusenmeyer.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github 
 *          folder name in your workspace.
 */

var maleCount = function(customers) {
    //filter for male cust
    var males = _.filter(customers, function(person) {
        return person["gender"] === "male";
    });
    //count male customers
    return males.length
};
 
var femaleCount = function(customers) {
    //use reduce to iterate over customers array
    var females = _.reduce(customers, function(count, person) {
        //code block for internal func: if female, add 1 to seed
        return count + (person["gender"] === "female");
    }, 0) 
    //return remaining customers count
    return females;
};

var oldestCustomer = function(customers) {
    //declare function variable with reduce 
    var oldest = _.reduce(customers, function(previous, current){
        //update age to the higher of prev vs element
        if (current.age > previous.age) {
            //update your previous object to the current if older
            return current;
        } else {
            return previous;
        }
    })
    //oldest has become the object with highest age
    //return oldest customers name
    return oldest.name;
};

var youngestCustomer = function(customers) {
    //declare function variable with reduce 
    var youngest = _.reduce(customers, function(previous, current){
        //update age to the higher of prev vs element
        if (current.age < previous.age) {
            //update your previous object to the current if older
            return current;
        } else {
            return previous;
        }
    })
    //oldest has become the object with highest age
    //return oldest customers name
    return youngest.name;
};

var averageBalance = function(customers) {
    var numCusts = customers.length
    //use reduce to get sum of balances
    var sum = _.reduce(customers, function(totalBal, customer){
        //code block: add the new bal to totalBal
        return totalBal + Number(customer["balance"].replace(/[$,]/g,""));
        //$3,868.37 =>
    }, 0)
    //return sum/numCusts
    return sum/numCusts;
};

var firstLetterCount = function(customers, letter){
    //use reduce to iterate over arary
    var total = _.reduce(customers, function(count, person){
        //if person.name[0].toLowerCase = letter.toLowerCase
        if (person.name[0].toLowerCase() === letter.toLowerCase()) {
            return count + 1;
        } else {
            return count;
        }
    }, 0)
    return total; 
};

var friendFirstLetterCount = function(customers, customer, letter) {
    //return customer object with name - filter or for loop
    var customerArrObj = customers.filter(function(indvCustomer){
        return indvCustomer.name === customer;
        }
    ) 
    //customerArrObj = [{name: 'megan', friends: [{}, {}]}]
    var total = customerArrObj[0].friends.reduce(function(count, friend) {
        //if friend.name[0] === letter, case sensitive
        if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
            //count increase by 1
            return count += 1;
        } else {
            return count;
        }
    }, 0)
    return total;
};

var friendsCount = function(customers, givenCustomerName) {
    //iterate over customers array to access each customer object
    var friendInList = customers.filter(function(customer){
    var friends = customer.friends;
    for (var i = 0; i < friends.length; i++) {
      //console.log(friends[i])
      if (friends[i].name === givenCustomerName) {
        return true;
      }
    }
    }).map(customer => customer.name);
  return friendInList; //array of customers
}


var topThreeTags = function(array){
    //create an array of all tags
    var tags = array.map(obj => obj.tags)
    var flatTags = tags.flat();
    //iterate over the array
    var tally = flatTags.reduce(function(tallyObj, tag){
        //if key exists
        if (tallyObj[tag] > 0) {
            //increase value by one
            tallyObj[tag] += 1;
        } else { //if key doesn't exist 
            //create it with value 1
            tallyObj[tag] = 1;
        }
    return tallyObj;
}, {})

var maxNum = 0;
var maxWord;
var maxArr = [];

for(let char in tally){
  if(tally[char] > maxNum){
    maxNum = tally[char];
    maxWord = char
    delete tally[char]
  }
}
  maxArr.push(maxWord);

var maxNum = 0;
var maxWord;

for(let char in tally){
  if(tally[char] > maxNum){
    maxNum = tally[char];
    maxWord = char
    delete tally[char]
  }
}    
  maxArr.push(maxWord);

var maxNum = 0;
var maxWord;

for(let char in tally){
  if(tally[char] > maxNum){
    maxNum = tally[char];
    maxWord = char
    delete tally[char]
  }
}    
  maxArr.push(maxWord);

//return maxArr
    return maxArr;
};

var genderCount = function(array){
    //map() to return an array listing all genders
    var genders = array.map(obj => obj.gender) //=> [male, male, female, nonbinary,...]
    console.log(genders);
    //iterate over the array
    var genderObj = genders.reduce(function(obj, gender){
        //if key exists
        if (obj[gender] > 0) {
            //increase value by one
            obj[gender] += 1;
        } else { //if key doesn't exist 
            //create it with value 1
            obj[gender] = 1;
        }
    return obj;
}, {})
    //output object key = genders, value = freq
    return genderObj; 
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
