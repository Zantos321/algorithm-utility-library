// CONVERT CELSIUS TO FAHRENHEIT

function celsiusToFahrenheit(userTempCelsius) {
   return userTempCelsius * (9 / 5) + 32; // took temp celcuis and made it farenheit
}

// REVERSE A STRING

function makeStringBackwards(userString) {
   return userString.split("").reverse().join("");
}

// FACTORALIZE A NUMBER

function factoralize(userNum) {
   // need the given number and a starting point for the factoral
   for (var product = 1; userNum > 0; userNum--) {
      // declared the product and set the for loop to run while the userNum is greater than zero
      product *= userNum; // takes the value of the product and multiplies it by the userNum each time until the userNum is at 1
   }
   return product;
}

// FIND THE LONGEST WORD IN A STRING

function findLongestWordLength(userStr) {
   return Math.max(
      ...userStr // ...userStr takes all of the values/words of the string and puts them in a array
         .split(" ") // takes the sentence and makes and array out of it with each word
         .map((word) => word.length)
   ); // uses Math.max from the line above to only get the longest length value of the words
   // the line above makes an array of numerical values of the word lengths
}

// RETURN THE LARGEST NUMBER IN THE ARRAYS

function largestNumberArrays(userArray1, userArray2) {
   var numberLargestArray = [userArray1]; // put first array as a sub array of the new array
   numberLargestArray.push(userArray2); // added the second array as a second sub array in the new array
   return numberLargestArray.map(function (largeGroup) {
      // start of the map with the function for the large group of numbers
      return largeGroup.reduce(function (firstNumber, secondNumber) {
         // reduce with the function to call the numbers in the subArray
         return firstNumber > secondNumber ? firstNumber : secondNumber; // uses an if statement with ternary operators
         // ternary operators are difficult look to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
         /* ternary goes like this the condtional (the part in the parentesis in an if statement),
         then the ? ,then the part if true return or change, then :, then the part if false return or change,
         so: ** contitional statement ? true return/change : false return/change */
      });
   });
}

// CONFIRM THE ENDING

function endingConfirmed(userString, userEnding) {
   return userString.slice(-userEnding.length) === userEnding;
   /* used slice to pull the last characters from the string researching the slice mdn and stack overflow, i found
   out that if you just use a negative number, it will pull from the end of the string to the beginning.  This function 
   just uses the target string's length to pull the last characters from the first sting and it then compares the two. */
}

// REPEAT A STRING REPEAT A STRING
function stringRepeat(userString, userRepeatNumber) {
   repeatString = ""; // base empty string
   for (var count = 0; count < userRepeatNumber; count++) {
      repeatString += userString; // for loop to add the userString to the repeatString
   }
   return repeatString;
}
