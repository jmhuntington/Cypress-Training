{
    var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// TODO: modify this code
for (var i = 0; i < myArray.length; i++)
    {
        console.log(myArray[i]);
    }
 
    var i;
      for (i = 0; i < 3; i = i + 1)
        {
            console.log(i);
        }
    
    for (var i = 0; i < 3; i++)
        {
            console.log(i);
        }

        var emptyObject = {};
        var personObject = {
            firstName : "John",
            lastName : "Smith"
        }

        var personObject = {
            firstName : "John",
            lastName : "Smith"
        }
        personObject.age = 23;
        personObject["salary"] = 14000;

//assigns values to person, prints each value on each line
        var person = {
            firstName : "Jack",
            lastName : "Smith",
        }
        person["employed"] = true;
        person.age = 19;
            
        
        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.age);
        console.log(person.employed);
//creates a variable called multiplyFive, creates a function to return a number and multiply by 5
//prints the number 
        var multiplyFive = function (number) {
            return number * 5;
        }
        console.log(multiplyFive(3));
        console.log(multiplyFive(4));
        console.log(multiplyFive(5));
        console.log(multiplyFive(6));

//Make a variable test set it equal to a prompt box, and type "Hi!" in it (without the quotes) when it pops up. Note: your pop-up blocker must not be enabled.

        var test = prompt("Type Hi!");
        console.log(test);


//Define a function called callback which receives an argument and prints it out.
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    
    console.log(sentence);
}

useCallback(callback);

//Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.
const divideByTwo = number => number / 2;

console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(12));
console.log(divideByTwo(6));

//Write a function which receives a string, and returns a Promise.

//The promise should resolve with the uppercase version of the string, but should reject if the string is null.
function upperCaseAsync(s) {
    return new Promise((resolve, reject) => {
        if (s === null) {
            reject();
        } else {
            resolve(s.toUpperCase());
        }
    });
}

upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});

//Write an async function which waits 500 milliseconds and then returns the uppercase of a given string. Use the sleep function provided.
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
    await sleep(500);
    return s.toUpperCase();
}

uppercaseString("edward").then(console.log);

//Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

//The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
// TODO: create the Person class using a function
var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        return this.name + ", " + this.age + " years old";
    }
}
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());


    }

