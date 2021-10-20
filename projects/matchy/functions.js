/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//paramater Array of `animals`, String, the name of an animal on which to perform a search
//array of animals = [{name: "Jerome", species: "duck"...}, {horse}, {cat}...]
function search (arr, str) {
    //if animal name exists, return animal object
    for (var i = 0; i <= arr.length -1; i++) {
        if (arr[i].name === str)
        return arr[i];
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//3 parameters, an Array of animals, a String representing  the name of an animal 
//on which to perform a search, and an Object that represents the replacement animal.
 
function replace(arr, str, obj) { 
    for (var i = 0; i <= arr.length - 1;  i++) {
        if (arr[i].name === str)
        arr[i] = obj //replace arr[i] with obj
    }
} 

//test works! replace(animals, "Jerome", {species:'spider', name: "Samantha", noises: ["quiet"]});


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*- If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.*/

 function remove(arr, str) {
    for (var i = 0; i <= arr.length - 1;  i++) {
        if (arr[i].name === str)
        arr.splice(i, 1)//deleting arr[i] from arr
    }
 }

 //test works!  remove(animals, "MJ"); 

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, obj) {
    var nameMatch = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === obj.name) {
            nameMatch = true;
        }
    }
    if (nameMatch === false && obj.name.length > 0 && obj.species.length > 0) {
        arr.push(obj);
    }
 }
//test add function

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
