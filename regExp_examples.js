const arrayOfStrings = ['Mathew', 'cat', 'June 31', 'red', 'winter', '42', '5 apples', 'candles'];

// Lets imagine we need to find all elements in an array that begin with "ca"
// One of the ways to do so is by using regExp

const matchRegExp = (text, regExp) => {
    return RegExp(regExp).test(text);
};

// console.log(matchRegExp('cat, /^(ca)/)); // you can see that this will return true, this is just an example to show you how it should work
// console.log(matchRegExp('dat', /^(ca)/)); // this will return false, as it should

const elementsStratingWithCa = arrayOfStrings.filter((element) => { return matchRegExp(element, /^(ca)/) }); // this will equal [ 'cat', 'candles' ]
// console.log(elementsStratingWithCa); // if youn don't believe me you can uncomment this line and see for yourself


// lets imagine we need to get every element that has a digit in it

const elementsContainingDigits = arrayOfStrings.filter((element) => { return matchRegExp(element, /\d+/) }); // this will equal [ 'June 31', '42', '5 apples' ]
// console.log(elementsContainingDigits); // if youn don't believe me you can uncomment this line and see for yourself