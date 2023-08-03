//ONLY ODDS
//create a for loop where starting from index 0, 
//will look for numbers when divided by 2 do not have a remainder of 0 (odd#)
//if found to meet conition, will be pushed to empty new array
//new array will be printed once iteration is done (at the index less than the length)

let givenArray = [2,4,6,8,10,11,12]
let newArray =[];

for (i=0; i<givenArray.length; i++) {
    if (givenArray[i]%2 !== 0) {
        newArray.push(givenArray[i]);
    }
}

console.log (newArray);


//VOWEL VS CONSONANT
//create variable for the string to be assessed
//interate through the string from the 1st index to the last index
// which is equal to 1 less the length
//if a vowel is found, continue to add to vowel counter
//any other letter, add to consonant counter
//print string which includes initial string and number
//of vowels and consonants 

let inputString = "textbook"
let vowelCounter = 0;
let consonantCounter = 0;

for (i=0; i<inputString.length; i++) {
    if (inputString[i]=="a"||inputString[i]=="e"||inputString[i] =="i"||
        inputString[i]=="o"||inputString[i]=="u")  {
        vowelCounter++;
    }
    else {
        consonantCounter++;
    }    
}

console.log(inputString +" has " + consonantCounter +" consonants and "
            + vowelCounter + " vowels");


//REVERSE ARRAY 
//create variable for given array and an empty array
//interate through the given array starting from last index
//aka array.length-1 and keep decreasing index until zero is hit
// each value is progressively added empty array 
//forms reverse array 

let inputArray = [1,-1,2,-3,5,-8,13]
let reverseArray = []

for (i=inputArray.length-1; i>=0; i--) {
    reverseArray.push(inputArray[i]);
}

console.log(reverseArray);


//FIZZBUZZ
//write a loop where numbers from 1 up to and including 100 are checked for the following
//if multiple of 3 and 5 (divisible by both), print fizzbuzz
//if divisible by just 3, fizz
//and if divisible by 5, buzz
//otherwise, just print the number
//will go up by one until condiition met (up and including 100). 

 for (i=1; i<=100; i++) {
    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz");
    }
    else if (i%3===0) {
        console.log("Fizz");
    }
    else if (i%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
 }

