// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
];

// 1.
var greeting = function(greeting, location, time){
    var grt = greeting.concat(' ' + location + ' ' + time);
    console.log(grt);
};

// 2.
var contestants = function(array){
    return array.length;
};

//contestants(dogs);

// 3.
var filterSpecies = dogs.filter(entrant => entrant.species === 'dog');

//console.log(filterSpecies);

// 4. 
var dogContestants = [...filterSpecies];

//console.log(dogContestants)

// 5. 
var dogsWithClasses = dogContestants.map(function(dog){
    if (dog.weight > 0 && dog.weight <= 10){
        dog.class = 'red'
        return dog
    } else if (dog.weight > 10 && dog.weight <= 20){
        dog.class = 'yellow'
        return dog
    } else {
        dog.class = 'green'
        return dog
    }
});

//console.log(dogsWithClasses);

// 6.
var firstInClass = function(array, obj = {}) {
    //base case
    if (array.length === 0) {
      console.log('hit here?')
    //recurse all props from array of objs into a single obj
    } else {
        Object.assign(obj, array[0], 
            firstInClass(array.slice(1, array.length), obj)
            )
    }
    //return obj
    return obj;
}

//console.log(firstInClass(topDogs));

// 7.
var votes = dogs.reduce(function(tally, entrant){
    return tally + entrant.votes
    //find sum of votes cast for ALLL contestants
}, 0);

//console.log(votes)