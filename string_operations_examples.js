const arrayOfNumbers = [ 5 ,8, 11, 9, 3, 27];
const personalInfromationObject = {
    name: "Mathew",
    age: 24,
    birthDate: 'May 16 1994',
    favoriteNumbers: arrayOfNumbers
};
const age = 24;
const name = 'Mathew';
const birthDate = 'May 16 1994'
//Ways to create a string which contains values from variables

//Basic string concatination using the "+"" sign
const oldWayString = 'Hello, my name is ' + name + '. I was borne on ' + birthDate + '. And now I am ' + age + ' years old.'; // this will be equal "Hello, my name is Mathew. I was borne on May 16 1994. And now I am 24 years old."

//A more modern way to print out the same string using string templating from es6
const templatingString = `Hello, my name is ${name}. I was borne on ${birthDate}. And now I am ${age} years old.`; // this will also be equal "Hello, my name is Mathew. I was borne on May 16 1994. And now I am 24 years old."

//You can combine separate strings using string.concat() method
const concatinatedString = name.concat(' is ', age, ' years old.'); // this will be qual "Mathew is 24 years old."

//You can reference variables, functions and objects inside strings, though the referenced elements will be converted to string 
const stringWithInfrormationFromAnObject = `Mathew is ${personalInfromationObject.age} years old.`; // this will be equal "Mathew is 24 years old."

//You can reference elements from an array using []
const stringWithANumberFromAnArray = `Mathew's favorite number is ${arrayOfNumbers[0]}.`; //this will equal "Mathew's favorite number is 5."
const stringWithANumberFromAnArrayFromAnObject = `Mathew's favorite number is ${personalInfromationObject.favoriteNumbers[0]}.`; //this will also equal "Mathew's favorite number is 5."




//Method often used with strings

//indexOf()
// it will return the position of the element you hav passed to it. If the element if absent from this string it will return -1
const yearPosition = birthDate.indexOf('1994'); // this will equal 7
const mLetterPosition = birthDate.indexOf('M'); // this will equal 0
const noneExistingLetterPossition = birthDate.indexOf('I do not exist'); //this will return -1 as it is supposed to :)

//trim()
// this method removes spece\tabulation simbols from the start of a stering and from its end
const stringWithSpaces = '      I have a lot of spaces.     ';
const stringWithoutSpaces = stringWithSpaces.trim(); // this will equal 'I have a lot of spaces.'
// console.log(`|${stringWithSpaces}|`); //this is here just for the sake of providing an example. Uncomment these two lines to see for yourself 
// console.log(`|${stringWithoutSpaces}|`); //this is here just for the sake of providing an example. Uncomment these two lines to see for yourself 

//split()
// this method returns an array of strings that were separated by the string passed to this method as an argument
const stringOfMonths = 'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec';
const arrayOfMonths = stringOfMonths.split(','); // this will be equal [ 'Jan',' Feb',' Mar',' Apr',' May',' Jun',' Jul',' Aug',' Sep',' Oct',' Nov',' Dec' ]

//substr()
// this method returns the part of a string between the start index and a number of characters after it
const longString = 'This is a big string... sort of';
const shortenedString = longString.substring(2, 7); // this will equal "is is"
const sortOfString = longString.substring(longString.indexOf('big string')); // this will equal "big string... sort of"
const bigString = longString.substring(longString.indexOf('big'), longString.indexOf('sort')); // this will equal "big string..."

// toLowerCase()
// this method returns the calling string value converted to lower case
const upperCaseString = 'THIS IS SPARTA!'
const lowerCaseString = upperCaseString.toLowerCase(); // this will equal "this is sparta!"

// toUpperCase()
// this method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)
const upperCaseAgain = lowerCaseString.toUpperCase(); // this will equal "THIS IS SPARTA!"

// toString()
// this method returns a string representing the specified object
const numberThree = 3;
const normalExample = 2 + numberThree; // this will equal 5
const oddExample = 2 + numberThree.toString(); // this will equal "23", yeah I know what you are thinking: JS is wierd! But it's not: by changing one of the variables to string we changed the implied behaviour of the "+"" sign, normaly it would mean "add", but if we are dealing with strings it means "concatinate"
const oddExampleUsingQotationMarks = 2 + "3"; // this will also equal "23"