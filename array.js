const myArry = [9,8,7,6,5,4,-2]
const myArry2 = [12, 13, 14, 15, 16, 17]
//myArry.push(15); // add element at the end of array
//myArry.pop(); // remove last elemnt from the array

//const joinArray = myArry.concat(myArry2);

//console.log(myArry.at(3));
//console.log(myArry);

//const iterator = myArry.entries();
//console.log(iterator.next().value);
//console.log(iterator.next().value);

//console.log(myArry.copyWithin(2, 4, 5));

// Spread syntaz test for object. Key should be different otherwise it will override the value of the key.
const syntaxArray = {...myArry, ...myArry2};
console.log(syntaxArray);