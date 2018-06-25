// Ways to declare arrays
// the "usual" way
const bigArrayOfRandomThings = [4, 'something', {name: 'Mathew', age: 23},['March', 'April', 'May'], 1, 'apple']; // this will equal [ 4,'something',{ name: 'Mathew', age: 23 },[ 'March', 'April', 'May' ],1,'apple' ]
let nonSortedArrayOfNumbers = [8, 3, 11, 2, 92, 42, 33]; // this will equal [8, 3, 11, 2, 92, 42, 33]
let secondNonSortedArrayOfNumbers = [4, 5, 1];

// the alternative way
const alternativeWayArrayofRandomThings = Array.of(4, 'something', {name: 'Mathew', age: 23}, ['March', 'April', 'May'], 1, 'apple'); // this will also equal [ 4,'something',{ name: 'Mathew', age: 23 },[ 'March', 'April', 'May' ],1,'apple' ]



// Ways to combine two arrays into one
// concat()
// this method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
const combinedArray = nonSortedArrayOfNumbers.concat(secondNonSortedArrayOfNumbers); // this will equal [ 8, 3, 11, 2, 92, 42, 33, 4, 5, 1 ]

// The obvious way, though it has a caveat
const combinedArrayTheSimpleWay = nonSortedArrayOfNumbers + secondNonSortedArrayOfNumbers; // this will equal "8,3,11,2,92,42,334,5,1", a string, yes, a string. This might cause some unexpected problems if you are not aware of it
// console.log(typeof combinedArrayTheSimpleWay); // if you don't believe me you can uncomment this section and see for yourself

// The fancy and optimal way if you are using ES6 features (which you should)
const fancyCombinedArray = [...nonSortedArrayOfNumbers,...secondNonSortedArrayOfNumbers]; // this will equal [ 8, 3, 11, 2, 92, 42, 33, 4, 5, 1 ], and yes it is an array, not a string

// The way most people would expect it to be done
const simpleCombinedArray = [nonSortedArrayOfNumbers, secondNonSortedArrayOfNumbers]; // this will equal [ [ 8, 3, 11, 2, 92, 42, 33 ], [ 4, 5, 1 ] ], yeah, an array of two arrays. So it's probably not what you expect :)
// console.log(simpleCombinedArray); // if you don't believe me you can uncomment this section and see for yourself

// The "I read the MDN documentation and didn't bother with the details" way
// push()
// this method adds one or more elements to the end of an array and returns the new length of the array
const joinedArray = nonSortedArrayOfNumbers.push(secondNonSortedArrayOfNumbers); // this will equal 8, yes 8 as a number(eight)
// console.log(joinedArray); // if you don't believe me you can uncomment this section and see for yourself
// but if you just need to add an element to an existing array using push is alright

// Wait, but what happened to the nonSortedArrayOfNumbers array?
// well it changed, the second array was added to it and now it equals [ [ 8, 3, 11, 2, 92, 42, 33 ], [ 4, 5, 1 ] ]
// console.log(nonSortedArrayOfNumbers); // if you don't believe me you can uncomment this section and see for yourself

// I'm just going to reset the array to the way it was at the begining of the file so that previous examples won't affect the ones below
// pop()
// this method removes the last element from an array and returns that element. This method changes the length of the array
const initialArray = nonSortedArrayOfNumbers.pop(); // this will equal [ 4, 5, 1 ], same thing as with pop(): you should read check what each method returns not just what it is called and what you pass to it
// console.log(initialArray);// if you don't believe me you can uncomment this section and see for yourself

// But what about the nonSortedArrayOfNumbers? Now it equals [8, 3, 11, 2, 92, 42, 33], just like at the beginning
// console.log(nonSortedArrayOfNumbers); // if you don't believe me you can uncomment this section and see for yourself


// Commonly used methods for arrays

// indexOf()
// this method returns the first index at which a given element can be found in the array, or -1 if it is not present
const indexOfFive = secondNonSortedArrayOfNumbers.indexOf(5); // this will equal 1

// includes()
// this method determines whether an array includes a certain element, returning true or false as appropriate. It uses the sameValueZero algorithm to determine whether the given element is found
const arrayContainsFive = secondNonSortedArrayOfNumbers.includes(5); //this will equal true

// slice()
// this method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified
const slicedArray = nonSortedArrayOfNumbers.slice(0, 3); // this will equal [ 8, 3, 11 ]

// splice()
// this method changes the contents of an array by removing existing elements and/or adding new elements
const splicedArray = secondNonSortedArrayOfNumbers.splice(0, 1, 6, 7); // this will equal [4], yeah, [4], while secondNonSortedArrayOfNumbers now equals [ 6, 7, 5, 1 ]
// console.log(splicedArray); // if you don't believe me you can uncomment this section and see for yourself

// now we will return our secondNonSortedArrayOfNumbers array to its original state
secondNonSortedArrayOfNumbers.splice(0, 2, 4); // secondNonSortedArrayOfNumbers will now equal [ 4, 5, 1 ]
// console.log(secondNonSortedArrayOfNumbers); // if you don't believe me you can uncomment this section and see for yourself

// sort()
// this method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points
const sortedArrayOfNumbers = nonSortedArrayOfNumbers.sort((a, b) => a - b); // sortedArray of numbers will equal [ 2, 3, 8, 11, 33, 42, 92 ], and nonSortedArrayOfNumbers will also be equal [ 2, 3, 8, 11, 33, 42, 92 ] now
// console.log(sortedArrayOfNumbers); // if you don't believe me you can uncomment this section and see for yourself
// console.log(nonSortedArrayOfNumbers); // if you don't believe me you can uncomment this section and see for yourself

// changing the array back to its original state
nonSortedArrayOfNumbers = [8, 3, 11, 2, 92, 42, 33];

// forEach()
// this method executes a provided function once for each array element
const multipliedArray = nonSortedArrayOfNumbers.forEach((element) => { return element = element*2 }); //this is how many people would attempt to multyply all elements in an array by 2, obviously this is wrong
// multypliedArray will equal undefined and the original array will have the same values
// console.log(multipliedArray); //if you don't believe me you can uncomment this section and see for yourself
// console.log(nonSortedArrayOfNumbers); //if you don't believe me you can uncomment this section and see for yourself
nonSortedArrayOfNumbers.forEach((element, index) => { return nonSortedArrayOfNumbers[index] = element * 2 }); // this is how it's supposed to be done, nonsortedArrayOfNumbers will equal [ 16, 6, 22, 4, 184, 84, 66 ] now
// console.log(nonSortedArrayOfNumbers); //if you don't believe me you can uncomment this section and see for yourself

// changing the array back to its original state
nonSortedArrayOfNumbers = [8, 3, 11, 2, 92, 42, 33];

// map()
// this method creates a new array with the results of calling a provided function on every element in the calling array
const trueMultipliedArray = nonSortedArrayOfNumbers.map((element) => { return element * 2 }); // trueMultipliedArray will now equal [ 16, 6, 22, 4, 184, 84, 66 ], while nonSortedArrayOfNumbers wil still be equal [ 8, 3, 11, 2, 92, 42, 33 ]
// console.log(trueMultipliedArray); //if you don't believe me you can uncomment this section and see for yourself
// console.log(nonSortedArrayOfNumbers); //if you don't believe me you can uncomment this section and see for yourself