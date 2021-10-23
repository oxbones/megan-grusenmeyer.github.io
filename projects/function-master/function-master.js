//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //perform Object.key
    var arr = Object.keys(object);
    //take that array and concatenate its entries into a string with spaces
    return arr.join(" "); 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr1 = [];
    //find all string values in an object looping and using typeof
    for (key in object) {
        //if typeof = string, push into arr1  
        if (typeof object[key] === "string") {
            arr1.push(object[key])
        }
    }
    return arr1.join(" ");
    //return concatenated arr1 with spaces
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*arrayOrObject() : Should take one argument and return 'array' if its 
an array and 'object' if its an object*/
function arrayOrObject(collection) {
  //test if array  
  if (Array.isArray(collection)) {
    //return "array" if true
    return "array";
  }  
  //then test if object
  else if (typeof(collection) === "object") {
    //return "object"
    return "object";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Take a string of one word, and return 
the word with its first letter capitalized*/

function capitalizeWord(string) {
    //Split string into letters => ["h", "e", "l", "l", "o"]
    var splitStr = string.split("");
    console.log(splitStr);
    //toUpperCase() the first letter => ["H"]
    var capLetter = splitStr[0].toUpperCase();
    //splice capH into splitStr[0] => ["H", "e", ...]
    splitStr.splice(0, 1, capLetter);
    console.log(splitStr);
    //join into one string again => "Hello"
    return splitStr.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create empty string
    var captalizedWords = "";
    //Split phrase into words => ["i", "am", "a", "cat"]
    var splitStr = string.split(" "); //splitStr = ["i", "am", "a", "cat"]
      //loop through splitStr's indexes
      for (var i = 0; i < splitStr.length; i++) {
      //, replace the first letter with the caplitalized first letter
      var upperCased = splitStr[i].replace
      (splitStr[i][0], splitStr[i][0].toUpperCase());
      captalizedWords += upperCased + " ";
    }
    return captalizedWords.trim();
  }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take an object with a name property and return 'Welcome <Name>!'*/

function welcomeMessage(object) {
    //capitalize first letter of name value in obj
    return "Welcome " + object["name"].replace(object.name[0], 
    object.name[0].toUpperCase()) + "!";
  }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(object) {
    return object["name"].replace(object.name[0], 
    object.name[0].toUpperCase()) + " is a " + 
    object["species"].replace(object.species[0], 
    object.species[0].toUpperCase());
  }; 

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Take an object, if this object has a noises array return them as a 
string separated by a space, if there are no noises return 'there are no noises'*/

function maybeNoises(object) {
  //if noises key exists within object
  if (object["noises"] && object["noises"].length > 0) {
    //return the array as a string separated by a space
    return object["noises"].join(" "); 
  }
    //if noises doesnt exist or isnt an array
    else {
      //return "there are no noises"
      return "there are no noises";
    }
  }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Take a string of words and a word and return true if <word> is in 
<string of words>, otherwise return false*/

function hasWord(string, word) {
  var arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)){
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*take a name and an object and add the name to the object's friends 
array then return the object*/

function addFriend (name, object) {
  //push into array within object at specific key
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*take a name and an object and return true if <name> is a friend of 
<object> and false otherwise*/

function isFriend(name, object) {
  if (object.hasOwnProperty("friends") && object["friends"].includes(name)) {
    return true;
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Take a string name and an array of people objects with a friends key 
= [] and return a array of the people that <name> is not friends with */

function nonFriends(name, array) {
//if (arr[i].friends.includes(name) !== true);
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i].friends.includes(name) ||
    array[i].name === name) === false){
    newArr.push(array[i].name);
    }
  }
  //newArr.push(arr[i].name);
  return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Take an object, a key and a value. Update the property <key> on 
<object> with new <value>. If <key> does not exist on <object>, 
create it*/

function updateObject(object, key, value) {
    object[key] = value;
    return object;
};

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Take an object and an array of strings. Remove any 
properties on <object> that are listed in <array>*/

function removeProperties(object, array) {
  //create array of all keys 
  var arrKeys = Object.keys(object);
  //find any arrKeys indexes that are listed in array
  //outer loop is arrKeys
  for (var i = 0; i < arrKeys.length; i++) {
    //inner loop is arr2
    for (var j = 0; j < array.length; j++){
      //compare operation 
      if (arrKeys[i] === array[j]) {
      delete object[arrKeys[i]];
      }
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an array and return an array with all the duplicates removed

var arr = ["a", "b", "c", "b"];

function dedup(array) {
  // return a new array with all the duplicates removed
 return newArr = [... new Set(array)];
} 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}