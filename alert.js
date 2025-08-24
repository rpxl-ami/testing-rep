//console.log("hello");
//console.log(2+8);

const userName = new String("A blue owl with red eye. and a red feather.");
const spChar = new String("☃★♲");

// Key Value Pair
console.log(`Key Value Pair at 5th position: ${userName[5]}`);

// Length() get length of a string.
console.log(`User Name String Length is: ${userName.length}`);

// at() get the specific value of a string, also go to negitive.
let index = 5;
console.log(`An index of ${index} have value ${userName.at(index)}`);

let newIndex = -3;
console.log(`An negitive index of ${newIndex} value of ${userName.at(newIndex)}`);

// chatAt() new versionof at() cannot show negitive value.
let CharIndex = 8;
console.log(`An index of ${CharIndex} value of ${userName.charAt(CharIndex)}`);

// charCodeAt()
let codeIndex = 9;
console.log(`Index value of ${userName.charCodeAt(codeIndex)} is equal to ${userName.charAt(codeIndex)}`);

// codePointAt() use for non-negitive integer
let pointIndex = 2;
console.log(`Code point Value of ${pointIndex} is ${spChar.codePointAt(pointIndex)}`);

// padEnd() add repeted value at the end of the string.
console.log(`adding 3dots at end of string ${userName.padEnd(38, ".")}`);

// replaceAll() re[;ace all specific value inside a string.]
console.log(`The new string is replace red with black: ${userName.replaceAll("red", "black")}`);
console.log(`The old string with red color: ${userName}`);

// slice() it cut string
console.log(`The sliced text is: ${userName.slice(5,18)}`);