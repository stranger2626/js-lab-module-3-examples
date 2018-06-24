// Ways to declare arrays
// the "usual" way
const bigArrayOfRandomThings = [4, 'something', {name: 'Mathew', age: 23},['March', 'April', 'May'], 1, 'apple']; // this will equal [ 4,'something',{ name: 'Mathew', age: 23 },[ 'March', 'April', 'May' ],1,'apple' ]
const nonSortedArrayOfNumbers = [8, 3, 11, 2, 92, 42, 33]; // this will equal [8, 3, 11, 2, 92, 42, 33]
const secondNonSortedArrayOfNumbers = [4, 5, 1];

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
// console.log(nonSortedArrayOfNumbers);// if you don't believe me you can uncomment this section and see for yourself