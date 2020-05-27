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
      // runs the loop until count gets to the number the user specified
      repeatString += userString; // for loop to add the userString to the repeatString
   }
   return repeatString;
}

//  TRUNCATE A STRING

function stringTruncate(userString, userNum) {
   return userString.length > userNum // conditional to check if the string length is longer than the number given
      ? userString.slice(0, userNum) + "..." // if yes then slice from the beginning to the number specified
      : userString; // if no then just return the string
}

// FINDERS KEEPERS

function findersKeepers(userArray, userSelection) {
   let functionType = // this lets users select what function they are using
      userSelection === 2
         ? function (num) {
              // if user enters 2 it will look for an even number
              return num % 2 === 0;
           }
         : function (num) {
              return num % 2 !== 0; // if the user enters 1 it will look and odd number
           };
   return userArray.filter(functionType)[0]; // returns the first odd/even number by using filter(the function) the [0] makes the filter stop when if finds the first value that satifies the function
}

// BOO WHO

function booWho(userInput) {
   return userInput === true || userInput === false ? true : false; // checks to see if the user input is a boolean primitive(true/false) otherwise it returns false
   // could have done typeOf to make shorter instead of boolean (return typeOf userInput === "boolean";)
}

// TITLE CASE A SENTENCE

function titleCase(userStr) {
   return userStr
      .toLowerCase() // makes everything lowercase
      .split(" ") // turns the string into an array with each array object a word
      .map(function (strObj) {
         //taking each word from the array
         return strObj.replace(
            // using replace to change each word
            strObj.charAt(0), // the first argument of replace is pointing to what is being replaced, here is the first letter because charAt(0) will point to the first letter of strObj
            strObj.charAt(0).toUpperCase(0) // the second argument is what is replacing the first, in this case a capitalized letter
         );
      })
      .join(" "); // turns the array back into a string
}

// SLICE AND SPLICE

function sliceSplice(userArray1, userArray2, userSelection) {
   let arrayModified = userArray2.slice(); // copies the second array so the original wont change
   arrayModified.splice(userSelection, 0, userArray1); // takes the copied second array and using slice inserts the first aray into it.
   return arrayModified;
   // slice(where are we inserting this, how many should we delete, insert and/or delete from where)
}

// FALSY BOUNCER

function falsyBouncer(userArray) {
   return userArray.filter(function (trueTrue) {
      // uses a filter get rid of false values
      return trueTrue; // since false values in function only show true values, we dont need more than this. (I was notified by the internet that putting !! infron of the variable is a better way of writing this.)
   });
}

// WHERE DO I BELONG

function whereDoIBelong(userArray, userNumber) {
   userArray.push(userNumber); // adds user number to that array
   userArray.sort(function (a, b) {
      // sorts the array in increasing order
      return a - b;
   });
   return (
      "The now sorted array is: " +
      userArray +
      " The position of your number in that array is: " +
      userArray.indexOf(userNumber) // shows the position of the userNumber in the array
   );
}

// SCRIPTING MUTATIONS

function mutation(userArray) {
   let mainObj = userArray[0].toLowerCase().split(""); // lowercase and split first element of the array
   let testObj = userArray[1].toLowerCase().split(""); // lowercase and split second element of the array
   for (let letter = 0; letter < testObj.length; letter++) {
      // runs the for loop for each letter of the seceond element
      if (mainObj.indexOf(testObj[letter]) < 0) {
         // if statement is testing to see if the letter is in the index of the first element if not return false
         return false;
      }
   }
   return true; // if the if statement passes everything then return true
}

// CHUNKY MONKEY

function chunkyMonkey(userArray, userSize) {
   let finalArray = []; // new array fo the sliced up arrays to go into
   for (
      let subArrSize = 0;
      subArrSize < userArray.length;
      subArrSize += userSize // must increment by the userSize to make sure we get the same output for each sub array
   ) {
      finalArray.push(userArray.slice(subArrSize, subArrSize + userSize)); // chops up the main array into small arrays and puts them into the new array as sub arrays.
   }
   console.log(finalArray);
   return finalArray;
}
