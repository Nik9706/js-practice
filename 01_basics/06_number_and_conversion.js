const score=300
console.log(score)

const digit= new Number(3000)   // we can see the difference on the brower 
console.log(digit)

console.log(digit.toString().length)
console.log(digit.toFixed(2))

//let num = 5.56789;
//let n = num.toFixed(2); // "5.57"

const othernumber=23.994 
//console.log(othernumber.toPrecision(3))   //to precision also precise the value and give result 

const othernumbers=1000000
//console.log(othernumbers.toLocaleString('en-IN'))  // en-In to converT In indian form

//The toLocaleString() method in JavaScript is used to convert a Date or Number object to a string, using locale settings. This method provides a language-sensitive representation of the object.


//********************Maths *****************************//
console.log(Math)
console.log(Math.abs(-4));    // it change sign 
console.log(Math.round(4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,8,9,8))
console.log(Math.max(4,8,9,7))

console.log(Math.random())   // important it basically give the value b/w 0 and 1
console.log(Math.random()*10+1) // it is mostly used to make dice games

console.log(Math.floor(Math.random()*10+1))

const max=20
const min=10

console.log(Math.floor(Math.random()*(max -min+1))+min)

//node 06_number_and_conversion.js

