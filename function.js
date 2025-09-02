/*
function nameMain(params) {
    //console.log(`Hi I am a function.`);
    //return (`Hi`);

    let fName = "Function Js";
    return fName;
}
const callFun = nameMain();
console.log(callFun);
*/

/* // function with parameter.

function nParameter(username){
    if(username === undefined){
        console.log(`No name enter`);
        return;
    }
    else{
        return `My name is ${username}`;
    }
    
}

//console.log(nParameter("John"));
console.log(nParameter("Ami"));
*/
/*
//passing multiple value
function addTwono(a, b){
    let total = a+b;
    return total;
}

const sum = addTwono(18, 2);

console.log(`Sum is - ${sum}`);
*/
/*
// if there is many values
// we ude rest operator (...)
function checkOut(...price){
    return price;
}

let totalPrice = checkOut(18, 2, 20, 10, 5);

console.log(`Cart price is: ${totalPrice}`);
console.log((totalPrice));
console.log((totalPrice[1]));
*/
/*
// passing array in function

let nArray = [10, 20, 40, 70, 150]

function gettingArrayValue(passingArgumnet){
    return passingArgumnet;
}

//console.log(gettingArrayValue(nArray));
console.log(gettingArrayValue(nArray[3]));
*/

// passing object in function

let nObj = {
    mName : "John",
    age : 28,
    city : "Old Monk"
}

function gettingObject(objectValue){
    return objectValue;
}

console.log(gettingObject(nObj.city));
