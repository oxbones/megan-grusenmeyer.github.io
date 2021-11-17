
//CONTROL FLOW

//0. If - a true/false conditional statement that can be used in functions to create a condition 
//          under which code should be executed. Always execute if their condition is true. 
                var eat = function(mood){
                    if (mood === 'hungry') {
                        return 'eat something';
                    }
                }
                var mood = 'hungry';
                console.log(eat(mood)); // returns 'eat something'

//1. Else-if - used in conjunction with if statements to create a more complex logic, a second 
//          condition. This part of the code will only execute for the first true condition.
                var window = function(insideTemp) {
                    if (insideTemp === 'hot') {
                        return 'open window';
                    } else if (insideTemp === 'cold') {
                        return 'close window';
                    }
                }
                var insideTemp = 'cold';
                console.log(window(insideTemp)); // logs 'close window'

//2. Else - used in conjunction with if statements to outline what code to execute when the if 
//          statement(s) are not met. 
                var modeOfTransport = function(weather, distance) {
                    if (weather === 'raining') {
                        return 'car';
                    } else if (distance < 0.5){
                        return 'walk';
                    } else {
                        return 'bike'
                    }
                }
                var todaysWeather = 'sunny';
                var groceryStore = 3;
                console.log(modeOfTransport(todaysWeather, groceryStore)); // returns 'bike' 

//3. Switch - similar to an if-else chain, switch statements compared the value of the expression 
//with cases. If it matches, a block of code is executed. There's a defauilt case with code to be 
//executed. 
                var weather = 'raining';
                switch(weather) {
                    case 'raining': 
                        modeOfTransport = 'car'
                        break;
                    case 'windy': 
                        modeOfTransport = 'walk'
                        break;
                    default:
                        modeOfTransport = 'bike'
                }; // returns 'car'
                
           









