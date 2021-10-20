/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "horse";
animal["name"] = "Flicka";
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; 
noises[0] = "neigh";
noises.push("whinny");
noises.unshift("sigh");
//add a sound to the end of your noise 
//array using the .length property
noises[noises.length] = "nicker";
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises array to animal object
animal["noises"] = noises; 
animal.noises.push("squeal");
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
/* 7. [ ] Create two more animal objects each with a 
 species, a name, and at least two sounds sounds and 
 add each one of them to `animals.
 8. [ ] `console.log` `animals`, and, `console.log` the 
 length of `animals`. Is everything looking right?
*/
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck);
console.log(animals);
var pig = {species: 'pig', name: 'Charlotte', noises: ['oink', 'growl']};
var cat = {species: 'siamese', name: 'MJ', noises: ['meow', 'purr']};
animals.push(pig, cat);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; 

function getRandom(array) { ///produce a random number between arrIndexes[0] - arrIndexes[arrIndexes.length-1]
  var arrIndexes = [];
  for (var i = 0; i <= array.length - 1; i++) {
      arrIndexes.push(i);
  }
  /////////////////////Math.floor(Math.random() * (max                               - min           + 1)) + min
  var myRandomNumber = Math.floor(Math.random() * (arrIndexes[arrIndexes.length -1]  - arrIndexes[0] + 1)) + arrIndexes[0];
  return myRandomNumber;
};

// call the function using the animals array, generating a random index
var index = getRandom(animals);

console.log("Random index is " + index);

//use your random index to push an animal's name into the empty friends array
friends.push(animals[index].name);

console.log("The first animal on the friends list is " + friends);
 

// Using bracket notation add the friends list to an animal with a key of friends
animals[0]["friends"] = friends; // adds friends to the first object in the animals array

console.log(animals); 
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}